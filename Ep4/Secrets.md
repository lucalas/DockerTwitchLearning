# Secrets

Il modo migliore per salvare informazioni quali: Chiavi SSH, Password, Certificati, etc... è l'utilizzo del Docker Secrets, si tratta di spazi criptati che possono essere caricati nel RAM Disk allo startup di un container.

L'utilizzo di un Secrets da parte di un container viene gestito dal **Swap Manager** che decide quale container può accedere ad un determinato secrets.

L'utilizzo dei secrets è disponibile solo per gli swarm services e non per i containers standalone.

Puoi aggiornare i secrets ai quali può accedere un container(service), aggiungere o rimuovere secrets.

Puoi aggiungere, modificare o rimuovere secrets in qualsiasi momento, l'unico vincolo è la rimozione dei secrets che non può avvenire se quest'ultimo è utilizzato da un service.

# Enciclopedia

https://docs.docker.com/engine/swarm/secrets/