# Huawei

## Índice

1. Configuração
    1. Resetar configurações
    2. Comandos básicos
    3. Troubleshooting
    4. Criando conta de usuário
    5. Alterando a porta do serviço SSH
    6. IPv4
        1. Configurando endereço IP
        2. Configurando rota estática
        3. Configurar DNS
    7. IPv6
        1. Configurando endereço IPv6
        2. Configurando rota estática
        3. Configurar DNS
2. Concentrador PPPoE
    1. Virtual template
    2. Esquema de autenticação e accounting
        1. Esquema de autenticação
        2. Esquema de accounting
    3. Servidor RADIUS e CoA
        1. Servidor RADIUS
        2. CoA/PoD
    4. Configurando pool
        1. Pool IPv4
        2. Pool IPv6
            1. Prefixo local
            2. Prefixo PD
            3. Pool Túnel
            4. Pool PD
            5. DHCPv6
    5. Domínio
    6. Ativando o servidor PPPoE
3. Radius
    1. Integrando o Radius
    2. Profile/Queue dinâmica
    3. Profile/Queue estática 4 Nomenclaturas

# Configuração

## Resetar configurações

> <HUAWEI>reset saved-configurationWarning: The action will delete the saved configuration on the device.The configuration will be erased to reconfigure.Continue? [Y/N]:yWarning: Now clearing the configuration on the device.Info: Succeeded in clearing the configuration on the device. <HUAWEI>rebootIPU 3:Next startup system software: cfcard:/V800R011C10SPC100-OC-NE-M2K-B.ccNext startup saved-configuration file: NULLNext startup paf file: defaultNext startup patch package: cfcard:/NE40E-M2V800R011SPH023-C10SPC100.PATWarning: Current configuration will be saved to the next startup saved-configuration file! Continue? [Y/N]:nSystem will reboot! Continue? [Y/N]:y Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36541bce-0b53-4cb6-804b-8f075ad90e8d/image1.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/36541bce-0b53-4cb6-804b-8f075ad90e8d/image1.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8dce632-104a-4188-8885-87e0054b0672/image2.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c8dce632-104a-4188-8885-87e0054b0672/image2.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f0fac30-10c7-46c0-bd12-36ae661c19bd/image3.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7f0fac30-10c7-46c0-bd12-36ae661c19bd/image3.png)

## Comandos básicos

Entrar no modo de configuração:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a66f52ea-4199-48f0-99ed-4f0071bd4634/image4.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a66f52ea-4199-48f0-99ed-4f0071bd4634/image4.png)

Aplicar configurações:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19fa6172-4edd-4ed4-bcef-dadd7865bb3f/image5.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/19fa6172-4edd-4ed4-bcef-dadd7865bb3f/image5.png)

Sair do modo de configuração ou voltar um nível de diretório:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4fce7ef-97f8-4588-b64d-e725edfd8d67/image6.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e4fce7ef-97f8-4588-b64d-e725edfd8d67/image6.png)

Salvar configurações:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6db7019-ca52-4cf8-a9f5-99abb1865e5f/image7.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f6db7019-ca52-4cf8-a9f5-99abb1865e5f/image7.png)

Exibir configuração de um diretório:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33e14624-1a8d-440b-a384-49dccbec55ae/image8.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/33e14624-1a8d-440b-a384-49dccbec55ae/image8.png)

Exibir configuração atual

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2671d98c-197b-4adf-b58a-d9b0267c8f47/image9.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2671d98c-197b-4adf-b58a-d9b0267c8f47/image9.png)

## Troubleshooting

Log do Radius

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53d9f2c2-afda-445c-8787-2a982a90effc/image10.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/53d9f2c2-afda-445c-8787-2a982a90effc/image10.png)

Verifica se o login está online:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b4a7600-24a2-4997-9733-d292de5d21ff/image11.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/6b4a7600-24a2-4997-9733-d292de5d21ff/image11.png)

Verifica se o login está online e exibi as informações IPv4, IPv6, Queue

> display access-user username teste verbose

Monitorar consumo de banda

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/711d0805-af11-482e-aeef-df17d8f5e1ff/image12.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/711d0805-af11-482e-aeef-df17d8f5e1ff/image12.png)

Desconectar usuário:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15e8b91b-1b30-4397-966b-616f6b064689/image13.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/15e8b91b-1b30-4397-966b-616f6b064689/image13.png)

## Criando conta de usuário

Criando conta de usuário:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fc451f8-e703-455f-b66a-ca5cf8fb31ef/image14.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7fc451f8-e703-455f-b66a-ca5cf8fb31ef/image14.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7682a5c7-81c6-4814-94c8-5b69fcc20a42/image15.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7682a5c7-81c6-4814-94c8-5b69fcc20a42/image15.png)

## Alterando a porta do serviço SSH

Desativando o SSH IPv6:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ba2911d-e1b2-4d63-93a1-58e2c5696b9c/image16.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3ba2911d-e1b2-4d63-93a1-58e2c5696b9c/image16.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c5397d6-a47a-44e1-9703-abc091b750c4/image17.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/7c5397d6-a47a-44e1-9703-abc091b750c4/image17.png)

Alterando a porta SSH IPv4:

> [~HUAWEI]ssh ipv4 server port 2200

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05bd602d-07d1-432f-9733-5a276a20913e/image19.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/05bd602d-07d1-432f-9733-5a276a20913e/image19.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e60ef90-ef4e-45de-8a95-db50f3bf12b7/image20.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5e60ef90-ef4e-45de-8a95-db50f3bf12b7/image20.png)

## IPv4

### Configurando endereço IP

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/677a1845-aa0b-4fea-9050-465830d332c6/image21.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/677a1845-aa0b-4fea-9050-465830d332c6/image21.png)

Comandos:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00fabaf3-5a33-4d67-8def-71df959c9e3a/image22.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/00fabaf3-5a33-4d67-8def-71df959c9e3a/image22.png)

### Configurando rota estática

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54b1dbe1-c5a2-4092-bffd-e5ddbc64bd16/image23.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/54b1dbe1-c5a2-4092-bffd-e5ddbc64bd16/image23.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3517ac2b-c56d-4596-9931-4fb16c475bb3/image24.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3517ac2b-c56d-4596-9931-4fb16c475bb3/image24.png)

### Configurar DNS

Configurar servidores DNS:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cabd5c1a-092c-434e-8aa4-5935dcc0eea1/image25.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/cabd5c1a-092c-434e-8aa4-5935dcc0eea1/image25.png)

> [*HUAWEI]commit

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8933a67a-60fa-4fad-bc41-72cbf9cf1167/image26.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8933a67a-60fa-4fad-bc41-72cbf9cf1167/image26.png)

## IPv6

### Configurando endereço IPv6

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/346f531c-87a7-447b-b4e4-0ba680be6af7/image27.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/346f531c-87a7-447b-b4e4-0ba680be6af7/image27.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3fafc747-53bb-4df6-a0fc-708c8bea98da/image28.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3fafc747-53bb-4df6-a0fc-708c8bea98da/image28.png)

### Configurando rota estática

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df71f9ee-ad73-476f-adc5-cab7bfbb1201/image29.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/df71f9ee-ad73-476f-adc5-cab7bfbb1201/image29.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c60ef624-9a02-40d9-9d84-881840102234/image30.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c60ef624-9a02-40d9-9d84-881840102234/image30.png)

### Configurar DNS

Configurar servidor DNS:

> [*HUAWEI]dns server ipv6 2804:12A4:100:4::2[*HUAWEI]dns server ipv6 2001:4860:4860::8888[*HUAWEI]commit Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c298821-a3c3-4e8e-b87e-3a965c56de0c/image31.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8c298821-a3c3-4e8e-b87e-3a965c56de0c/image31.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/baca1e73-e4dc-4b61-bbff-53b903773d08/image32.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/baca1e73-e4dc-4b61-bbff-53b903773d08/image32.png)

# Concentrador PPPoE

## Virtual template

Configurar o Virtual Templete:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9dde9906-f890-4fcf-a5be-38bd98a61076/image33.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9dde9906-f890-4fcf-a5be-38bd98a61076/image33.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cc8ad42-5b54-4b12-8f46-165180477522/image34.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/8cc8ad42-5b54-4b12-8f46-165180477522/image34.png)

## Esquema de autenticação e accounting

### Esquema de autenticação

Configuração de um esquema de autenticação

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab6af000-cc56-4735-9493-11fd967f965c/image36.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/ab6af000-cc56-4735-9493-11fd967f965c/image36.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d8b7acc-42d9-4544-adcd-d42a3d6c6b15/image37.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3d8b7acc-42d9-4544-adcd-d42a3d6c6b15/image37.png)

### Esquema de accounting

Configuração de um esquema de accounting

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/55524e3e-77d7-4964-a995-a6853ca01010/image38.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/55524e3e-77d7-4964-a995-a6853ca01010/image38.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc14fb0c-09a7-4070-8bc5-fc22607c96cf/image39.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/bc14fb0c-09a7-4070-8bc5-fc22607c96cf/image39.png)

## Servidor RADIUS e CoA

### Servidor RADIUS

Configuração de um grupo de servidor RADIUS:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28caf839-7663-4d8d-b1ab-72b656cb32a2/image40.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/28caf839-7663-4d8d-b1ab-72b656cb32a2/image40.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ae43835-2c7e-49e0-b3c4-ed99f8196a52/image41.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/9ae43835-2c7e-49e0-b3c4-ed99f8196a52/image41.png)

### CoA/PoD

Configuração CoA/PoD:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11012739-91e8-43ab-a9de-794de3043137/image42.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/11012739-91e8-43ab-a9de-794de3043137/image42.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/659438e3-8a06-4508-8e1a-0b916ed4dbb1/image43.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/659438e3-8a06-4508-8e1a-0b916ed4dbb1/image43.png)

## Configurando pool

### Pool IPv4

Configurando pool IPv4

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e02525ff-3e36-49a0-bf1c-ea8cb1f1bfb6/image44.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e02525ff-3e36-49a0-bf1c-ea8cb1f1bfb6/image44.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a19655a3-e196-44ac-8c1e-bc28e32658c8/image45.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a19655a3-e196-44ac-8c1e-bc28e32658c8/image45.png)

### Pool IPv6

Configurando pool IPv6

**Prefixo local**

Criando o prefixo de túnel:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0758be5-f760-4126-acd1-738d00ded16a/image46.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f0758be5-f760-4126-acd1-738d00ded16a/image46.png)

> [~HUAWEI-ipv6-prefix-prefixo-tunel]prefix 2804:12A4:100:8000::/50

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42107390-bb28-4d1e-bf29-1465f74c64bb/image47.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/42107390-bb28-4d1e-bf29-1465f74c64bb/image47.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1fa69cc-f2a4-4cea-8a3d-02de3cb21801/image48.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/d1fa69cc-f2a4-4cea-8a3d-02de3cb21801/image48.png)

**Prefixo PD**

Criando o prefixo de delegação:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22ea617f-5f35-4e9b-a30e-5c411670258d/image49.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/22ea617f-5f35-4e9b-a30e-5c411670258d/image49.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f5adb27-3bd5-4410-a875-a736469bab47/image50.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0f5adb27-3bd5-4410-a875-a736469bab47/image50.png)

**Pool Túnel**

Configurando o pool de túnel:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7d5590-bb4c-41da-89f7-77dcd3b33dd4/image51.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/de7d5590-bb4c-41da-89f7-77dcd3b33dd4/image51.png)

Comando:

> ipv6 pool pool-tunel bas local dns-server 2804:12A4:100:4::2 2001:4860:4860::8888

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68952964-5b02-4880-8211-4580d6cd989a/image52.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/68952964-5b02-4880-8211-4580d6cd989a/image52.png)

**Pool PD**

Configurando o pool de prefixos:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f8e662f-abf7-46f2-a46b-5d6fb4b89139/image53.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/2f8e662f-abf7-46f2-a46b-5d6fb4b89139/image53.png)

**DHCPv6**

Configurar o DUID do servidor DHCPv6:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e961db9d-0d7e-4270-8ca5-41dd2be76f80/image54.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/e961db9d-0d7e-4270-8ca5-41dd2be76f80/image54.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4578e9cd-70e9-46d0-ae1f-82aad2b61691/image55.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/4578e9cd-70e9-46d0-ae1f-82aad2b61691/image55.png)

## Domínio

Configurando o domínio

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c931ebdd-1a2c-47b5-ade8-fda2e399a9af/image56.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/c931ebdd-1a2c-47b5-ade8-fda2e399a9af/image56.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625c09ac-f4f6-4d6b-8eac-c634baedf4cb/image57.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/625c09ac-f4f6-4d6b-8eac-c634baedf4cb/image57.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0eea15b-2d79-4842-af9c-b419eea039c7/image58.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/a0eea15b-2d79-4842-af9c-b419eea039c7/image58.png)

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7a09120-395c-4718-ba92-5027ab882177/image61.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/b7a09120-395c-4718-ba92-5027ab882177/image61.png)

## Ativando o servidor PPPoE

Configuração da VLAN, habilitando o IPv6 e vinculação com o Virtual-Template:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f543854d-6bb7-41aa-a07e-bb321fc2c6e3/image62.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/f543854d-6bb7-41aa-a07e-bb321fc2c6e3/image62.png)

Comando:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3dfd4b9e-4402-48ce-8bb4-95400386e419/image63.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3dfd4b9e-4402-48ce-8bb4-95400386e419/image63.png)

# Radius

## Integrando o Radius Profile/Queue dinâmica

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/510c0135-9d33-40ba-8abb-febd615d3121/image64.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/510c0135-9d33-40ba-8abb-febd615d3121/image64.png)

Para usar a configuração de forma dinâmica dos planos de velocidade, basta utilizar os atributos na resposta de grupo do Radius. Dessa forma o Radius enviará os valores para controle de banda ao concentrador, no momento da autenticação do login.

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0238e4ad-2fb7-41e8-b2e7-c6f27e0016d4/image65.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/0238e4ad-2fb7-41e8-b2e7-c6f27e0016d4/image65.png)

Exemplo:

> INSERT INTO radreply (Username, Attribute, op, Value) VALUES ('teste', 'Huawei-Input-Average-Rate', ':=', '30000INSERT INTO radreply (Username, Attribute, op, Value) VALUES ('teste', 'Huawei-Output-Average-Rate', ':=', '10000

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d07dc4e-d7b9-4d1c-aa23-6e229980778f/image66.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/5d07dc4e-d7b9-4d1c-aa23-6e229980778f/image66.png)

## Profile/Queue estática

Esse tipo de configuração é usada para cenários onde o controle de velocidade já esta criado no concentrador como demostra o exemplo:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b0f0640-a48f-4e46-8dab-742e8288005c/image67.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/3b0f0640-a48f-4e46-8dab-742e8288005c/image67.png)

Logo o nome do qos-profile deve ser inserido no cadastro do usuário que deseja vincular a esse profile:

![https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c2637b1-1bc3-438e-9dab-978dac917256/image68.png](https://s3-us-west-2.amazonaws.com/secure.notion-static.com/1c2637b1-1bc3-438e-9dab-978dac917256/image68.png)

Exemplo:

# Nomenclaturas

CE: Customer Edge

PE: Provider Edge

CPE: Customer Premise Equipment

BNG: Broadband Network Gateway

RADIUS: Remote Authentication Dial In User Service (Autenticação Remota Dial-In User Service)

AAA: Authentication, Authorization and Accounting (Autenticação de Assinante, Autorização e Contabilidade)

ANP: Access Netword Providers

ISP: Internet Service Provider (Provedor de Serviços de Internet)

NSP: Network Service Providers

Disponível em "[http://wiki.velbras.com.br/index.php?title=Huawei&oldid=2600](http://wiki.velbras.com.br/index.php?title=Huawei&oldid=2600)"