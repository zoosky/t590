# Änderungen an den Tarif Daten

## Manuelle Anpassung

Input `data/t590.js`:

* Tarif 999: Eine Tarifposition 999 einfügen
* Zeile entfernen: Titelüberschrift "Komplementärmedizin VVG"

  "Tarif-Name": "Komplementärmedizin VVG",
  "Nom du tarif": "Médecine complementaire LCA",
  "Nome di tariffa": "Medicina complementare LCA",
  Kapitelziffer: 2,

## Transformation

Ergibt akutell 130 Tarifpositionen pro Sprache:

    yarn build
    yarn deploy
