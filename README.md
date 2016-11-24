# SE2_16_172265_172811_P
Corso di Ingegneria del Software 2. Progetto basato su mock-up realizzato a lezione. Berlato Stefano, matricola 172811, Giacomo Zara, matricola 172265.
Il progetto consiste in un semplice sito internet, la cui funzione è raccogliere annunci di affitti rivolti agli studenti di Trento. A questo scopo è possibile registrarsi come utente e creare-modificare-eliminare inserzioni. E' fornita una funzionalità di ricerca per luogo (centro città, collina, ...), tipologia di sistemazione, disponibilità (in termini di tempo e posti liberi) e altri filtri. La scheda informativa di un annuncio contiene varie foto e descrizione, più i contatti (email, telefono...) di chi ha postato l'annuncio.


Da un punto di vista strutturale, il sito è articolato come riportato nel file "architecture.graphml" (visibile ed editabile con Yed, anche online). 


VIEW. Lato client sono presenti:
- 'home_page.html', attraverso la rotta "/" in GET. Fornisce due funzionalità base, ricerca e login/register.
- 'search_insertions.tpl', attraverso la rotta "/search" in GET. Mostra i risultati di una ricerca e i vari filtri disponibili.
- 'insertion_page.tpl', attraverso la rotta "/card" in GET. Rende disponibile descrizione, contatti dell'affittatore, foto e localizzazione nella mappa dell'inserzione selezionata.
- 'user.tpl', attraverso le rotte
    - "/register"
    - "/login"
    - "/add_insertion"
    - "/modify_insertion"
    - "/delete_insertion"
    Rende disponibile i dati dell'utente (contatti), un form di controllo (add-modify-delete) e la lista delle inserzioni attualmente attive
    
    
CONTROL. Lato server sono presenti:
- 'index.js'. Si occupa della creazione del server e di smistare le rotte.
- 'search_controller.js'. Si occupa della ricerca delle inserzioni (lista e singola). Ha le rotte:
    - "/search" GET. Controlla i parametri e ritorna 'search_insertions.tpl' con i dati ricavati dal DB_manager.
    - "/card" GET. Controlla i parametri e ritorna 'insertion_page.tpl' con i dati ricavati dal DB_manager.
- 'user_controller.js'. Si occupa degli utenti che vogliono inserire annunci. Ha le rotte:
    - "/login" POST. Controlla i parametri e ritorna 'user.tpl' con i dati ricavati dal DB_manager.
    - "/register" POST. Controlla i parametri, inserisce il nuovo utente e ritorna 'user.tpl' con i dati ricavati dal DB_manager.
- "insertions_controller.js". Si occupa di gestire add-modify-delete delle inserzioni. Ha le rotte:
    - "/add_insertion.js". Controlla i parametri e aggiunge l'inserzione. Ritorna 'user.tpl'.
    - "/modify_insertion.js". Controlla i parametri e modifica l'inserzione. Ritorna 'user.tpl'.
    - "/delete_insertion.js". Controlla i parametri ed elimina l'inserzione. Ritorna 'user.tpl'.


MODEL. Lato server sono presenti:
- 'DB_manager.js'. Modulo che gestisce i dati. Espone funzioni per la manipolazione degli utenti e inserzioni. In dettaglio:
    - bool add_user(username,password,data). Aggiunge il nuovo utente al database. Ritorna true se l'operazione va a buon fine, false altrimenti.
    - User verify_user(username,password). Verifica se l'utente appartiene o no al database. Ritorna un oggetto con i dati dell'utente se presente, altrimenti un oggetto vuoto.
    - bool add_insertion(id,data). Inserisce l'inserzione al database. Ritorna true se tutto va a buon fine, false altrimenti.
    - bool modify_insertion(id,data). Modifica l'inserzione del database. Ritorna true se tutto va a buon fine, false altrimenti.
    - bool delete_insertion(id). Elimina l'inserzione dal database. Ritorna true se tutto va a buon fine, false altrimenti.
    - Insertion[] search_insertions(filters). Opera una ricerca con i filtri, ritorna l'array di oggetti.
    - Insertion get_insertion(id). Ritorna tutti i dati di una inserzione.