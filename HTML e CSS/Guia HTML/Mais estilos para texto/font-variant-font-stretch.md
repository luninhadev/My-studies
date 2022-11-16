## font-variant

* variações na apresentação fonte

```css
p {
    font-variant: small-caps;
}
```

## font-estretch

* alargamento ou encolhimento da fonte
* aceita palavra-chave como: expanded, condensed, normal
* aceita porcentagens de 50% a 200%

```css
p {
    font-stretch: expanded;
}
```

## letter-spacing

* Espaços entre caracteres

```css
p {
    letter-spacing: 4px;
}
```

## word-spacing

* Espaços entre caracteres

```css
p {
    word-spacing: 4px;
}
```

## line-height

* Espaços entre linhas
* Pode ser com unidades ou sem unidades de medida
* Comuns: 1.5 ou 2

```css
p {
    line-height: 1.6;
}
```

## text-transform

* Transformação do texto

```css
p {
    text-transform: uppercase; /* capitalize | lowercase | none */
}
```

## text-decoration

* Aparência decorativa de um texto
* Line: underline | overline | line-through
    * podemos aplicar mais de 1 valor
* style: wavy | dotted | double | dashed | solid
* color: `<color>` values

```css
p {
    text-decoration: underline; /* shorthand */
}
```

## text-align

* Alinhamento de um texto

```css
p {
    text-align: center; /* left | right | center | justify */
}
```

## text-shadow

* Sombra aplicada a um texto
* Permite múltiplos valores

```css
p {
    text-shadow: 1px 1 px 1 px red, 2px 2px 1px green; /*  offset-x | offset-Y | blur-radius | color */
}
```

## Shorthand 

* font- style, font-variant, font-weight, font-stretch, font-size, line-height, e font-family

```css
p {
    /* -style, -variant, -weight, -stretch, -size, line-height, e -family. */
    font: italic normal bold normal 3em/1.5 Helvetica, Arial, sans-serif;
}
```