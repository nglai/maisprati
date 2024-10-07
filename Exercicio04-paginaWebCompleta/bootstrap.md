## Nav
- navbar-expand-lg
Define o ponto de interrupção (breakpoint) em que o conteúdo da navbar irá se expandir ou colapsar. Quando a largura da tela é maior que o breakpoint "large" o conteúdo da navbar será exibido na linha, com todos os itens do menu visíveis. Quando a largura da tela é menor que o breakpoint "large", o conteúdo da navbar irá colapsar e se esconder atrás de um botão de menu hambúrguer.

- navbar-brand
Identifica o logotipo ou nome da sua marca dentro de uma barra de navegação (navbar). Essa classe geralmente é aplicada em um elemento âncora (<a>) e serve para destacar visualmente a sua marca em relação aos outros elementos da navbar.

- navbar-toggler
Ao ser clicado, expande ou colapsa o conteúdo de uma barra de navegação (navbar) em telas menores.

- data-bs-toggle="collapse"
data-bs-toggle: indica que um elemento irá acionar algum tipo de ação ou comportamento quando clicado.
collapse: Especifica que a ação a ser realizada é o colapso ou expansão de outro elemento.
Quando você clica nesse elemento, o Bootstrap procura pelo elemento alvo especificado no atributo data-bs-target.

- aria-controls
Serve para estabelecer uma relação entre um elemento de controle e o elemento que ele controla. Quando utilizado em conjunto com data-bs-toggle="collapse", o atributo aria-controls indica qual elemento será mostrado ou escondido quando o elemento de controle for clicado.

- aria-expanded="false"
aria-expanded: Indica o estado atual de um elemento que pode ser expandido ou colapsado.
false: Significa que o elemento está colapsado ou oculto no momento.

- aria-label="toggle navigation"
Fornecer uma descrição textual adicional, especialmente para tecnologias assistivas como leitores de tela. Toggle navigation: Significa "alternar a navegação". Essa descrição informa ao usuário que ao clicar nesse elemento, a navegação será expandida ou contraída.

- navbar-nav
Cria uma lista de itens de navegação dentro de uma barra de navegação (navbar).

## Slick
https://kenwheeler.github.io/slick/

## Spacing
m - margin
p - padding
t - for classes that set margin-top or padding-top
b - for classes that set margin-bottom or padding-bottom
s - (start) for classes that set margin-left or padding-left in LTR, margin-right or padding-right in RTL
e - (end) for classes that set margin-right or padding-right in LTR, margin-left or padding-left in RTL
x - for classes that set both *-left and *-right
y - for classes that set both *-top and *-bottom

0 - for classes that eliminate the margin or padding by setting it to 0
1 - (by default) for classes that set the margin or padding to $spacer * .25
2 - (by default) for classes that set the margin or padding to $spacer * .5
3 - (by default) for classes that set the margin or padding to $spacer
4 - (by default) for classes that set the margin or padding to $spacer * 1.5
5 - (by default) for classes that set the margin or padding to $spacer * 3
auto - for classes that set the margin to auto

## FontSize (tamanho da fonte)
fs-1 até fs-6

## Flex
d-flex: display flex