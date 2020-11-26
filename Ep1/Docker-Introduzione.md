# Docker

Docker è una piattaforma dedicata allo sviluppo e alla messa in produzione di applicazioni basandosi su container che rappresentano dei sottosistemi che condivido il kernel della macchina principale.

-	Flessibili,
-	Leggero (rispetto ad una vm)
-	Portabile
-	Atomico
-	Scalabile
-	Sicuro

Ogni container ha un suo filesystem privato al quale ha accesso ed è fornito dall’immagine docker.

### Container & Image
L’image docker rappresenta il gruppo di file che conterrà tutto il necessario per eseguire il container
Il container rappresenta il processo effettivo che eseguirà la nostra applicazione basandosi sull’immagine 

### Comandi:
**docker run [docker_name]** -> Avvia un docker e se non presente in locale lo scarica (-d per fare il detach dell'applicazione)

**docker image ls** -> Restituisce la lista di immagini scaricate

**docker ps** -> Restituisce la lista di docker che sono in esecuzione (--all tuttti i docker anche quelli che non stanno girando)

**docker build .** -> Questo comando compilerà la nostra immagine docker basata sui sorgenti che si trovano nella cartella corrente (--tag nome permette di assegnare un nome/tag all'immagine)

**docker login** -> Questo comando ci permette di eseguire il login su docker hub dalla nostra macchina

**docker tag** -> Questo comando ci permette di ritaggare l'immagine docker (verrà creata una nuova immagine locale mantenendo la vecchia con il vecchio nome)

**docker push** -> QUesto comadno ci permette di pushare l'immagine su Docker Hub

### Workflow per lo sviluppo di un container

1. Creare e testare singolarmente le componenti del nostro docker
2. Assemblare il container completo di tutte le dipendenze necessarie
3. Testare, condividere e pubblicare la tu applicazione containerizzata

### Pubblicare un'immagine su Docker Hub
1. Registrarsi su https://hub.docker.com/
2. Creare un repository
3. Eseguire il login sulla macchina locale con: docker login
4. L'immagine docker deve essere taggata nel seguente modo: <docker_id>/<repo_name>:<tag> eseguiamo il comando: docker tag <source_tag> <dest_tag>
5. Push dell'immagine su Docker Hub eseguendo il comando: docker push <image_tag>

# ATTENZIONE
WORKDIR (comando di un DockerFile) rappresenta la cartella del filesystem privato del container, non c'entra niente con il file system della macchina locale.

STATELESS I cointainer sono stateless, questo vuol dire che tutte le modifiche che avverrano nel container, verranno perse nel momento in cui il container muore


# Enciclopedia

https://dev.to/emarsys/the-missing-docker-cheatsheet-4dbg