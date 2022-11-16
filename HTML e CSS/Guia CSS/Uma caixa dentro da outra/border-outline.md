# Border (e outline)

As bordas da caixa

- value: `<border-style>` | `<border-width>` | `<border-color>`
    - style: solid | dotted | dashed | double | groove | ridge | inset | outset
    - width: `<length>`
    - color: `<color>`

```css
div {
    /* shorthand */
    border-top: solid 2px; /*top | right | bottom | left */

    /* style */
    border: solid;

    /* width <length> | style */
    border: 2px dotted;

    /* style | color */
    border: outset #f33;

    /* width | styke | color */
    border: medium  dashed green; 
}
```

### E outline?

- difere em 4 sentidos:
    - não modifica o tamanho da caixa, pois não é parte do Box Model
    - poderá ser diferente de retangular
    - não permite ajustes individuais
    - mais usado pelo user agent para acessibilidade

https://developer.mozilla.org/en-US/docs/Web/CSS/border
