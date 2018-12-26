---
title: Premier Post
date: "2015-05-01T22:12:03.284Z"
---

Ceci est mon premier post. L'idée de blog (j'exècre ce nom), ou épanchement vomitoire vaniteux et orgueilleux, 
ne m'est pas apparu tout de suite. Je suis encore une fois dans l'obligation de suive la masse ovine et finalement, revendique moi aussi mes cornes de biques.

Je vais m'exprimer et moi aussi, dire un amas colossal de ramassis de mondanités, n'intéressant au final que ma seule âme.

Here is my first sample code:

```less

.createSizesClass(@value) {
  @i: length(@sizes);
  @j: length(@sizes);

  .d(@j) when (@j > 0) {
    .d((@j - 1));
    @size1: extract(@sizes, @i);
    @size2: extract(@sizes, @j);
    @value1: "unit-@{size1}";
    @value2: "unit-@{size2}";

   &-@{size1}-@{size2} {
      @{value} : @@value1 @@value2;
    }
  }

  ._(@i) when (@i > 0) {
    ._((@i - 1));
    .d(@j);
  } ._(@i);
}

.padding {
  .createSizesClass(padding);
}

.margin {
  .createSizesClass(margin);
}
```

**Mais que fais ce bout de code ?**

Eh bien, déjà, j'ai pas de forcément beaucoup de chance, mon entreprise utilise depuis bien longtemps le préprocesseur CSS le plus old school, le moins avancé en tout cas
