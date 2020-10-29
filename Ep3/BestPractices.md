# Docker Best Practices

Immagini piccole vuol dire download veloci e caricamenti in memoria rapidi.

Alcune regole da seguire per avere delle immagini piccole:
- Partire da un'immagine opportuna, se hai bisogno di una JDK, non partire da un'immagine Ubuntu per installarci la JDK, parti direttamente dall'immagine JDK.
- Riduci i layer della tua immagine (riduci i comandi RUN aggragando magari dei comandi shell in un unico RUN)
- Se hai immagini che hanno componenti comuni, scomponile in modo date la avere un'immagine base che conterrà tutti i componenti comuni dai quali erediteranno le altre immagini, questo permetterà di ottimizzare la memoria occupata e avere caricamenti più rapidi.
- Dai nomi comprensibili e utili ai tag delle immagini.

[Come gestire lo storage](DataStorage.md)


# Enciclopedia
https://docs.docker.com/develop/dev-best-practices/