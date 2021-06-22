- Aplicar ***commit*** a nível de teste e com segurança:

```
commit trial <segundos>
```

> Default
 é 600 segundos e após esse tempo será feito um rollback para a ultima 
configuração antes do commit trial. Semelhante ao “commit confirmed” no JunOS.

- Cancelar o ***commit trial***:

```
abort trial
```

Ex.

```
<HUAWEI> system-view
[~HUAWEI] sysname R1-BGP
[*HUAWEI] commit trial 120
[~rollback] abort trialWarning: The trial configuration will be rolled back. Continue? [Y/N]:y
Info: The trial configuration rollback succeeded.[~HUAWEI]
```

- Verificar configurações antes de aplicar ***commit***:

```
display configuration candidate
```

> Semelhante ao “show | compare” no JunOS.

- Descartar comandos aplicados sem dar ***commit***:

```
clear configuration candidate
```

> Semelhante ao “rollback 0” no JunOS.

- Rollback em um ***commit*** específico:

```
rollback configuration to commit-id <commit-id>
```

> Semelhante ao “rollback <id_rollback>” no JunOS.

- Verificar a lista de ***commits*** (IDs) aplicados:

```
display configuration commit list
```

Semelhante ao “***show system commit”*** no **JunOS**.

- Verificar configurações aplicadas em ***commits*** passados:

```
display configuration commit changes
```

> Semelhante ao “show system rollback compare” no JunOS.