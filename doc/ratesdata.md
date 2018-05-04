# Änderungen an den Tarif Daten

## Manuelle Anpassung

1.  csv hat trailing spaces vor `"` und `,`. Entfernen
2.  Leere Reihen entfernen
3.  Titel Zeilen entfernen
4.  999 Andere Leitungen anpassen:

    999,"Leistungen, die in keinem der aufgeführten Tarife enthalten sind","Prestations ne figurant dans aucun des tarifs énumérés","Servizi non inclusi in nessuna delle tariffe indicate",2,Diverses,Diverses,Vario,9999,"Andere Leistungen, pro 5 Minuten","Autres services, par période de 5 minutes","Altri servizi, ogni 5 minuti","z.B. Medizinischer Bericht, telefonische Konsultation, Rezepterstellung, etc.","Par exemple rapport médical, consultation téléphonique, établissement de l'ordonnance, etc.","ad es. referto medico, consultazione telefonica, rilascio delle ricette, etc.",2002-01-01,9998-12-31

Input `data/t590.js`:

* Tarif 999: Eine Tarifposition 9999 einfügen
* Zeile entfernen: Titelüberschrift "Komplementärmedizin VVG"

  "Tarif-Name": "Komplementärmedizin VVG",
  "Nom du tarif": "Médecine complementaire LCA",
  "Nome di tariffa": "Medicina complementare LCA",
  Kapitelziffer: 2,

## Transformation

Ergibt akutell 130 Tarifpositionen pro Sprache:

    yarn 2json    // csv to json
    yarn build
    yarn deploy
