OsloMet brukernavn: edute2121

GitHub brukernavn: edvarduteng

GitHub repo URL: https://github.com/edvarduteng/Oblig3-DATA1700

Fullt navn: Edvard Uteng

Kort beskrivelse av applikasjon (5-10 setninger):

Applikasjonen brukes for å registrere kjøp av kinobilletter. Brukeren velger en film, 
antall billetter og personlig informasjon om seg selv. Her brukes det input validering 
for å først sjekke om noe er skrevet i det hele tatt, og deretter sjekke om et gyldig 
telefonnummer eller epost er skrevet inn. Denne informasjonen lagres i et array og sendes
til en h2 database via post mapping i BillettKontroller og videre til BillettRepository 
som lagrer det i h2 database ved hjelp av shcema.sql koden. Deretter vises billettene
under "Alle billetter" som en tabell nederst på siden. Brukeren har også en knapp for å 
slette alle billettene som er lagt til, denne fjerner all informasjon fra arrayet i databasen
og oppdaterer dette på siden slik at billetten forsvinner.