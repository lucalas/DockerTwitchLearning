# Come persistere i dati
Alla base bisogna evitare di utilizzare lo strato di storage del container, questo incrementerà la dimenzione di quest'ultimo.


Ci possono essere tre alternative:
## Bind mounts
![](https://docs.docker.com/storage/images/types-of-mounts-bind.png)

Il seguente metodo esiste da quando è stato creato Docker e consiste nel riservare una cartella della macchina principale allo storage del container.

Questo sistema è molto performante ma dipende assolutamente dal filesystem sul quale si trova e sulla sua struttura di cartelle, in più non è gestibile con i comandi della CLI di Docker.
Il Bind mount va a creare la cartella source se non presente.

### Parametri per montare lo storage
**--mount '\<configuration\>'**
### \<configuration\>
- **type** = bind
- **source** = Percorso della cartella dove fare storage sulla macchina principale
- **destination** = Percorso di destinazione che si troverà sul container
- **readonly** = Storage di sola lettura
- **bind-propagation** = Configurazione per replicare dati tra i vari mount configurati, possibili [valori](https://docs.docker.com/storage/bind-mounts/#configure-bind-propagation): rprivate, private, rshared, shared, rslave, slave.
  

## Volumes
![](https://docs.docker.com/storage/images/types-of-mounts-volume.png)

Rispetto al bind mounts, i volumes sono direttamente gestiti da Docker e non dipendono direttamente dal file System dell macchina principale.

Ecco alcuni vantaggi:
- Backup facili e facili migrazioni
- Gestione dei volumi con la Docker Cli o con le Docker API!
- Disponibili sia su Linux che su Windows
- Possono essere condivisi in modo sicuro tra più containers
- Possibilità di creare volumes remoti

## tmpfs
![](https://docs.docker.com/storage/images/types-of-mounts-tmpfs.png)

Rispetto al bind mount e al volumes, questo metodo di storage è volatile, questo vuol dire che allo stop del container, tutti i dati salvati verranno persi.

Questo metodo è utile per il salvataggio temporaneo dei dati che richiedono performance elevate visto che i dati vengono salvati nella memoria della macchina principale.

### Limitazioni
- Questo sistema è disponibile solo su Linux.
- Non può essere condiviso tra containers come i volumes e i bind mounts


#Enciclopedia
https://docs.docker.com/storage/bind-mounts/
https://docs.docker.com/storage/volumes/
https://docs.docker.com/storage/tmpfs/