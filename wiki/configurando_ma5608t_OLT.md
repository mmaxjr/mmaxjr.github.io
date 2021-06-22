[Index page](../)

# [https://tiparaleigo.wordpress.com/2020/01/08/configurando-o-huawei-ma5608t/](https://tiparaleigo.wordpress.com/2020/01/08/configurando-o-huawei-ma5608t/)

Por exemplo, vou configurar o Huawei MA5608T.

Conecte-se ao dispositivo com um cabo do console na velocidade de 9600. Login padrão: root, senha: admin.

Vamos para o modo de configuração:


`enable`

`config`

Vamos ver a configuração atual:

`display current-configuration`

`display current-configuration | include TEXT`

Altere a senha do usuário root:



`terminal user password`

Vamos criar outro usuário, pois um administrador pode efetuar login como root e, sob o novo usuário 4, ao mesmo tempo:



`terminal user name`

`User Name(length<6,15>):ixnfocom`

`User Password(length<6,15>):`

`Confirm Password(length<6,15>):`

`User profile name(<=15 chars)[root]:`

`User's Level:3`

`1. Common User  2. Operator  3. Administrator:3`

`Permitted Reenter Number(0--4):4`

`User's Appended Info(<=30 chars):`

`Adding user successfully`

`Repeat this operation? (y/n)[n]:n`

Especifique os endereços IP a partir dos quais é permitido conectar-se ao dispositivo:


`sysman ip-access ssh 192.168.5.5 192.168.5.5`

`sysman ip-access ssh 192.168.1.1 192.168.1.2`

`sysman firewall ssh enable`

`sysman ip-access telnet 192.168.5.5 192.168.5.5`

`sysman ip-access telnet 192.168.1.1 192.168.1.2`

`sysman firewall telnet enable`

`sysman ip-access snmp 192.168.5.5 192.168.5.5`

`sysman ip-access snmp 192.168.1.1 192.168.1.2`

`sysman firewall snmp enable`

Configure traps SNMP e SNMP:



`snmp-agent community write IXNFO`

`snmp-agent community read IXNFO`

`snmp-agent sys-info contact IXNFO`

`snmp-agent sys-info location IXNFO`

`snmp-agent sys-info version v2c`

`snmp-agent target-host trap-hostname U2000SERVER address 192.168.5.3 udp-port 162 trap-paramsname NMS`

`snmp-agent target-host trap-paramsname NMS v2C securityname NMS`

`snmp-agent trap enable standard`

Configure o NTP:

`timezone GMT+ 02:00`

`time dst start 04-01 00:00:00 end 10-28 00:00:00 adjust 01:00`

`ntp-service unicast-server 192.168.2.7 source-interface vlanif208`

Vamos ver quais placas estão instaladas:



`display board 0`

`display board 0/0`

`display board 0/2`

`display board 0/4`

`display version`

`display patch all`

`display io-packetfile information`

`display temperature 0/0`

`display temperature 0/2`

`display cpu 0/0`

`display cpu 0/2`

Eu exibi:


`display board 0`

- `------------------------------------------------------------------------`

`SlotID  BoardName  Status          SubType0 SubType1 Online/Offline`

- `------------------------------------------------------------------------`

`0       H805GPBD   Normal`

`1`

`2       H801MCUD   Active_normal   CPCA`

`3`

`4       H801MPWC   Normal`

`5`

- `------------------------------------------------------------------------`

Se nenhum painel for adicionado, adicione:



`board confirm 0/0`

`board confirm 0/4`

Se necessário, você pode reiniciar a placa GPON da seguinte maneira:



`board reset 0/0`

Se não for necessário, exclua o endereço IP padrão da porta meth:


`interface meth0`

`undo ip address`

`quit`

Crie uma VLAN para gerenciamento e atribua um endereço IP:


`vlan 208 smart`

`port vlan 208 0/2 0`

`interface vlanif 208`

`ip address 192.168.2.2 255.255.255.0`

`quit`

Especifique o gateway padrão para que o endereço IP do dispositivo seja acessível a partir de outras redes:



`ip route-static 0.0.0.0 0.0.0.0 192.168.2.1`

Crie uma VLAN para usuários:



`vlan 944 smart`

`port vlan 944 0/2 0`

`display vlan 944`

Em seguida, criei um perfil de velocidade e perfis de 1 Gb / s para ONT de porta única e VLANs de cliente:



`display dba-profile all`

`dba-profile add profile-id 15 profile-name "dba-profile_15" type3 assure 1024`

`max 1000000`

`display ont-srvprofile gpon all`

`ont-srvprofile gpon profile-id 10 profile-name "vlan 944"`

`ont-port eth 1`

`port vlan eth 1 translation 944 user-vlan 944`

`commit`

`quit`

`display ont-lineprofile gpon all`

`ont-lineprofile gpon profile-id 10 profile-name "vlan 944"`

`tcont 4 dba-profile-id 15`

`gem add 1 eth tcont 4`

`gem mapping 1 0 vlan 944`

`commit`

Ative a proteção de loop:

`ring check enable`

`ring check resume-interval 30`

Ative a localização automática do ONT:



Vou dar um exemplo de adição do primeiro ONT na primeira porta GPON (mais precisamente, zero, pois a numeração começa em 0):



`display ont autofind all`

`interface gpon 0/0`

`display ont autofind 0`

`ont add 0 0 sn-auth "414C434CF2A40000" omci ont-lineprofile-id 10 ont-srvprofile-id 10 desc "ixnfo.com"`

`ont port native-vlan 0 0 eth 1 vlan 944 priority 0`

`quit`

`service-port 1 vlan 944 gpon 0/0/0 ont 0 gemport 1 multi-service user-vlan 944`

Exemplo de visualização de informações sobre o ONT:



`display ont info 0 0`

`display ont optical-info 0 0`

`display ont version 0 0`

`display statistics ont-eth 0 0 ont-port 1`

Você pode visualizar o endereço MAC do cliente por sua porta de serviço:



`display mac-address service-port 1`

Se você precisar remover o ONT, precisará remover sua porta de serviço:



`undo service-port 1`

`interface gpon 0/0`

`ont delete 0 0`

Salve a configuração:



`save`

Para descobrir qual módulo SFP está na porta PON, por exemplo C + ou C ++, você pode usar o comando:


`interface gpon  0/0`

`display port state 0`

Se houver dois cartões de controle, você poderá verificar o status da sincronização:



`display data sync state`

Você pode verificar se há um ONT com uma configuração incorreta:


`diagnose`

`display ont failed-configuration 0/0/0 all`

`quit`

Exemplo de visualização de informações sobre a emu:


`interface emu 0`

`display fan environment info`

`display fan system parameter`

`quit`

`emu add 1 H801esc 0 0  "GERM4815T"`

`display emu`

`display emu baudrate`

`interface emu 1`

`display esc system parameter`

`display esc environment info`

`quit`

# [Configurando o Huawei MA5608T](https://tiparaleigo.wordpress.com/2020/01/08/configurando-o-huawei-ma5608t/)

Por exemplo, vou configurar o Huawei MA5608T.

Conecte-se ao dispositivo com um cabo do console na velocidade de 9600. Login padrão: root, senha: admin.

Vamos para o modo de configuração:



`enable`

`config`

Vamos ver a configuração atual:

`display current-configuration`

`display current-configuration | include TEXT`

Altere a senha do usuário root:



`terminal user password`

Vamos criar outro usuário, pois um administrador pode efetuar login como root e, sob o novo usuário 4, ao mesmo tempo:



`terminal user name`

`User Name(length<6,15>):ixnfocom`

`User Password(length<6,15>):`

`Confirm Password(length<6,15>):`

`User profile name(<=15 chars)[root]:`

`User's Level:3`

`1. Common User  2. Operator  3. Administrator:3`

`Permitted Reenter Number(0--4):4`

`User's Appended Info(<=30 chars):`

`Adding user successfully`

`Repeat this operation? (y/n)[n]:n`

Especifique os endereços IP a partir dos quais é permitido conectar-se ao dispositivo:



`sysman ip-access ssh 192.168.5.5 192.168.5.5`

`sysman ip-access ssh 192.168.1.1 192.168.1.2`

`sysman firewall ssh enable`

`sysman ip-access telnet 192.168.5.5 192.168.5.5`

`sysman ip-access telnet 192.168.1.1 192.168.1.2`

`sysman firewall telnet enable`

`sysman ip-access snmp 192.168.5.5 192.168.5.5`

`sysman ip-access snmp 192.168.1.1 192.168.1.2`

`sysman firewall snmp enable`

Configure traps SNMP e SNMP:



`snmp-agent community write IXNFO`

`snmp-agent community read IXNFO`

`snmp-agent sys-info contact IXNFO`

`snmp-agent sys-info location IXNFO`

`snmp-agent sys-info version v2c`

`snmp-agent target-host trap-hostname U2000SERVER address 192.168.5.3 udp-port 162 trap-paramsname NMS`

`snmp-agent target-host trap-paramsname NMS v2C securityname NMS`

`snmp-agent trap enable standard`

Configure o NTP:



`timezone GMT+ 02:00`

`time dst start 04-01 00:00:00 end 10-28 00:00:00 adjust 01:00`

`ntp-service unicast-server 192.168.2.7 source-interface vlanif208`

Vamos ver quais placas estão instaladas:



`display board 0`

`display board 0/0`

`display board 0/2`

`display board 0/4`

`display version`

`display patch all`

`display io-packetfile information`

`display temperature 0/0`

`display temperature 0/2`

`display cpu 0/0`

`display cpu 0/2`

Eu exibi:

`display board 0`

- `------------------------------------------------------------------------`

`SlotID  BoardName  Status          SubType0 SubType1 Online/Offline`

- `------------------------------------------------------------------------`

`0       H805GPBD   Normal`

`1`

`2       H801MCUD   Active_normal   CPCA`

`3`

`4       H801MPWC   Normal`

`5`

- `------------------------------------------------------------------------`

Se nenhum painel for adicionado, adicione:



`board confirm 0/0`

`board confirm 0/4`

Se necessário, você pode reiniciar a placa GPON da seguinte maneira:



`board reset 0/0`

Se não for necessário, exclua o endereço IP padrão da porta meth:


`interface meth0`

`undo ip address`

`quit`

Crie uma VLAN para gerenciamento e atribua um endereço IP:


`vlan 208 smart`

`port vlan 208 0/2 0`

`interface vlanif 208`

`ip address 192.168.2.2 255.255.255.0`

`quit`

Especifique o gateway padrão para que o endereço IP do dispositivo seja acessível a partir de outras redes:



`ip route-static 0.0.0.0 0.0.0.0 192.168.2.1`

Crie uma VLAN para usuários:



`vlan 944 smart`

`port vlan 944 0/2 0`

`display vlan 944`

Em seguida, criei um perfil de velocidade e perfis de 1 Gb / s para ONT de porta única e VLANs de cliente:


`display dba-profile all`

`dba-profile add profile-id 15 profile-name "dba-profile_15" type3 assure 1024`

`max 1000000`

`display ont-srvprofile gpon all`

`ont-srvprofile gpon profile-id 10 profile-name "vlan 944"`

`ont-port eth 1`

`port vlan eth 1 translation 944 user-vlan 944`

`commit`

`quit`

`display ont-lineprofile gpon all`

`ont-lineprofile gpon profile-id 10 profile-name "vlan 944"`

`tcont 4 dba-profile-id 15`

`gem add 1 eth tcont 4`

`gem mapping 1 0 vlan 944`

`commit`

Ative a proteção de loop:


`ring check enable`

`ring check resume-interval 30`

Ative a localização automática do ONT:



Vou dar um exemplo de adição do primeiro ONT na primeira porta GPON (mais precisamente, zero, pois a numeração começa em 0):


`display ont autofind all`

`interface gpon 0/0`

`display ont autofind 0`

`ont add 0 0 sn-auth "414C434CF2A40000" omci ont-lineprofile-id 10 ont-srvprofile-id 10 desc "ixnfo.com"`

`ont port native-vlan 0 0 eth 1 vlan 944 priority 0`

`quit`

`service-port 1 vlan 944 gpon 0/0/0 ont 0 gemport 1 multi-service user-vlan 944`

Exemplo de visualização de informações sobre o ONT:

`display ont info 0 0`

`display ont optical-info 0 0`

`display ont version 0 0`

`display statistics ont-eth 0 0 ont-port 1`

Você pode visualizar o endereço MAC do cliente por sua porta de serviço:

`display mac-address service-port 1`

Se você precisar remover o ONT, precisará remover sua porta de serviço:


`undo service-port 1`

`interface gpon 0/0`

`ont delete 0 0`

Salve a configuração:


`save`

Para descobrir qual módulo SFP está na porta PON, por exemplo C + ou C ++, você pode usar o comando:



`interface gpon  0/0`

`display port state 0`

Se houver dois cartões de controle, você poderá verificar o status da sincronização:


`display data sync state`

Você pode verificar se há um ONT com uma configuração incorreta:


`diagnose`

`display ont failed-configuration 0/0/0 all`

`quit`

Exemplo de visualização de informações sobre a emu:


`interface emu 0`

`display fan environment info`

`display fan system parameter`

`quit`

`emu add 1 H801esc 0 0  "GERM4815T"`

`display emu`

`display emu baudrate`

`interface emu 1`

`display esc system parameter`

`display esc environment info`

`quit`