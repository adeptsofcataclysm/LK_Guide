---
sidebar_position: 4.1
title: Совет Принцев Крови
description: Описание и тактика на Совет.
---

```mdx-code-block
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import styles from './council-styles.module.css';
```

<div className="text--center">

![Tri_brata_acrobata](/img/icc/Blood_Princes_Council/Blood_Princes.jpg)

</div>

Совет Принцев Крови (оно же Кровавый совет) — первый босс в Багровых залах ЦЛК. Ну, "босс-совет" как в Чёрном храме
совет Иллидари перед Иллиданом. Тут, конечно, поинтереснее.

## Немного про бой

Тут интересное здоровье принцев: только один из всех троих имеет полноценное здоровье, остальные будут жить с 1 ХП. Во
время боя это здоровье будет полностью переливаться к другому принцу. У "активного" босса улучшаются способности и его
урон.
В энкаунтере это всё связанно с баффом [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952). На ком этот
дебафф есть, того принца следует дамажить однако этот же принц будет делать больнее своими способностями.

Весь бой состоит из 1-й фазы, даже никакого усиления в течении боя не происходит. Стратегия по ходу боя меняется в
зависимости от того, какой из принцев активен. Данный энкаунтер не про ДПС чек или гир чек, а про знание механик.
Каждому игроку нужно чётко выполнять свою роль, тут куча моментов из-за которых происходит вайп рейда.

Если рассматривать каждого принца по отдельности, то выходит такая картина:

<div className="text--center">

![Tri_brata_acrobata](/img/icc/Blood_Princes_Council/Blood_Princes_2.jpg)

</div>

<Tabs>
<TabItem value="Keleset" label="Келесет" attributes={{className: styles.keleset}} >

Этот принц с абилками на <span className="dmg-shadow">урон от тьмы</span>

Это кастер, который будет стоять и кастовать [теневые копья](https://www.wowhead.com/wotlk/ru/spell=71405) по КД.
Наносит 17к урона, нормально так, но терпимо. Также Келесет будет по всей арене призывать летающие
тучки, [теневые резонансы](https://www.wowhead.com/wotlk/ru/spell=71943). Танку Келесета их нужно наагрить на себя, т.к.
они кастуют луч в первого по агро. Этот луч чуть-чуть дамажит, но даёт стакающийся -35% к получаемому
урону дебафф.

<div className="text--center">
<b><i>

Келесет под [заклятьем крови](https://www.wowhead.com/wotlk/ru/spell=70952)
</i></b>
</div>

[Тееневые копья](https://www.wowhead.com/wotlk/ru/spell=71405) заменяются
на [копья зловещих теней](https://www.wowhead.com/wotlk/ru/spell=71815),
которые наносят под 97к урона от <span className="dmg-shadow">тьмы</span>. Вот поэтому танку и нужно собирать тучки
с [теневыми резонансами](https://www.wowhead.com/wotlk/ru/spell=71943).

</TabItem>
<TabItem value="Valanar" label="Валанар" attributes={{className: styles.valanar}}>

Этот принц с абилками на <span className="dmg-phis">физический урон</span>

Данный принц будет призывать в потолке арены [кинетические бомбы](https://www.wowhead.com/wotlk/ru/spell=72053).
Они будут меееедленно спускаться, и если коснутся земли то, взорвут рейд. Однако если по ним нанести точечный
урон, то они чуть-чуть поднимутся. Т.е. нужно чтобы их кто-то время от времени дамажил, чтоб они не взорвали рейд. Ещё
Валанар будет в случайном месте создавать [сотрясающий вихрь](https://www.wowhead.com/wotlk/ru/spell=72037),
(белая воронка) которая будет пульсировать, наносить урон и отбрасывать всех кто в неё зашёл.

<div className="text--center">
<b><i>

Валанар под [заклятьем крови](https://www.wowhead.com/wotlk/ru/spell=70952)
</i></b>
</div>

[Сотрясающий вихрь](https://www.wowhead.com/wotlk/ru/spell=72037) заменяется
на [могучий вихрь](https://www.wowhead.com/wotlk/ru/spell=72038).
Валанар начинает его кастовать и через 4.5 с. под **ВСЕМИ** игроками происходит взрыв радиусом 12 ярдов, который сильно
отбрасывает других
людей. Нужно до каста способности абсолютно всем (даже МДД) разбежаться и взять спред.


</TabItem>
<TabItem value="Taldaram" label="Талдаран" attributes={{className: styles.taldaram}}>

Этот принц с абилками на <span className="dmg-fire">урон от огня</span>

Данный принц конусное АОЕ [искры](https://www.wowhead.com/wotlk/ru/spell=71807), которые ещё и накладывают замедление.
Также время от времени Талдаран будет пускать
шар [колдовского пламени](https://www.wowhead.com/wotlk/ru/spell=71718) в случайного игрока, который
взорвётся и нанесёт АОЕ урон.

<div className="text--center">
<b><i>

Талдаран под [заклятьем крови](https://www.wowhead.com/wotlk/ru/spell=70952)
</i></b>
</div>

Огненный шар [колдовского пламени](https://www.wowhead.com/wotlk/ru/spell=71718) заменяется на ОГРООООМный
шар [жаркого колдовского пламени](https://www.wowhead.com/wotlk/ru/spell=72040). Он тоже пускается в случайного игрока,
однако изначально наносит под 100k урона. Если этот
шар по дороге пролетает над головами других игроков, то он выстреливает в них
кучу [опаляющих вспышек](https://www.wowhead.com/wotlk/ru/spell=71708). Чем больше выстрелов сделает шар,
тем больше потеряет свою изначальную мощь и тем меньше он нанесёт урона в АОЕ при касании игрока. Т.е. нужно чтобы этот
большой шар максимально долго летел над головами игроков (летит он быстрее чем бежит персонаж).

</TabItem>
</Tabs>

:::caution
[Заклятие крови](https://www.wowhead.com/wotlk/ru/spell=70952) будет переходить от принца к принцу, и под каждого из них
нужно определённая стратегия и расстановка, которые значительно различаются друг от друга.
:::

## Механики принцев

Особенностью героического режима является такая механика:

- [Темница тьмы](https://www.wowhead.com/wotlk/ru/spell=72999): при движении игрок получает 350 урона
  от <span className="dmg-shadow">тьмы</span> и настакивается дебафф. Чем больше двигаешься - тем больше получаемого
  урона. Стаки спадают через 10 с.

<div className="text--center">

***Движение - смерть (но не сразу)***

![kast](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_stacks.gif)

</div>

- [Заклятьем крови](https://www.wowhead.com/wotlk/ru/spell=70952): бафф, который будет скакать от одного принца к
  другому. Усиливает способности принца, на котором висит [заклятье](https://www.wowhead.com/wotlk/ru/spell=70952).
  Принц под баффом концентрирует всё ХП на себе. [Заклятье](https://www.wowhead.com/wotlk/ru/spell=70952) будет
  переходить на другого принца раз в 48-50 с.

<Tabs>
<TabItem value="Keleset" label="Келесет" attributes={{className: styles.keleset}} >

Принц-кастер. Предпочитает кастовать нежели чем бежать и бить лицо своей цели. Все его способности
наносят урон от <span className="dmg-shadow">тьмы</span>.

- [Теневое копьё](https://www.wowhead.com/wotlk/ru/spell=71405) **(1.5 с.)**: выстреливает в свою цель стрелу, которая
  наносит 19 013 - 19987 урона от <span className="dmg-shadow">тьмы</span>. Спам-способность.
    - Под [заклятием крови](https://www.wowhead.com/wotlk/ru/spell=70952) эта способность заменяется
      на [копьё зловещих теней](https://www.wowhead.com/wotlk/ru/spell=71815) **(1.5 с.)**: выстреливает в свою цель
      стрелу, которая наносит 95 063 - 99 937 урона от <span className="dmg-shadow">тьмы</span>.
- [Теневой резонанс](https://www.wowhead.com/wotlk/ru/spell=71943) **(мгновенное)**: Келесет призывает в случайных
  местах арены теневые облака, которые летают туда-сюда, если их не трогать. Но если их "задеть" (нанести урон), то
  у них включится агролист, они пойдут на свою цель и присосутся. На цели появляется
  дебафф [теневой резонанс](https://www.wowhead.com/wotlk/ru/spell=71822), который аносит 1000 урона
  от <span className="dmg-shadow">тьмы</span> раз в секунду но уменьшает получаемый урон на 35%.<br/>
  :::caution
  От каждой тучки дебафф отдельный, поэтому если 1 тучка сидит на человеке это -35% к получаемому урону, 2 тучки это
  -58% а 3 тучки это -73%. <br/><br/> Эти тучки живут не всегда, они исчезают через 85 с. (т.е. танку нужно постоянно их
  искать и агрить на себя). Также их легко закливать, что
  ззапрещено делать иначе танка шотнет.
  :::

<div className="text--center">

![Tuchi](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_tuchi.gif)

</div>

</TabItem>
<TabItem value="Valanar" label="Валанар" attributes={{className: styles.valanar}}>

Танкуется обычным танком. Все способности, что он применяет, наносят урон от <span className="dmg-phis">физики</span>,
по области
и сильно отбрасывают.

- [Кинетическая бомба](https://www.wowhead.com/wotlk/ru/spell=72053) **(1.5 с.)**: принц под потолком спавнит бомбу,
  которая мееедленно спускается. Если она коснётся земли, то всем игрокам нанесётся
  18 000 - 22 000 <span className="dmg-phis">физического</span> урона и ОЧЕНЬ сильно отбрасывает. Но сама бомба
  "кликабельна". Если в неё нанести точечный урон, то она немного
  поднимется. [Кинетическая бомба](https://www.wowhead.com/wotlk/ru/spell=72053) существует 60 с., каждая новая
  появляется каждые 20 с.

|                                    Бомба (вверх-вниз)                                    |                                                  Взрыв [кинетической бомбы](https://www.wowhead.com/wotlk/ru/spell=72053)                                                   |
|:----------------------------------------------------------------------------------------:|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------:|
| ![vverh-vniz](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_orangebomb.gif) | ![Bam](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_kinetic_Bam1.gif)     ![Bam](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_kinetic_Bam2.gif) |

- [Сотрясающий вихрь](https://www.wowhead.com/wotlk/ru/spell=72037) **(1.5 с.)**: применяет в свою цель. Создаёт
  воронку под случайным игроком в рейде, которая через 4-5 с. активируется. Она каждую секунду взрывается на
  12 000 <span className="dmg-phis">физического</span> урона (радиус взрыва 12
  ярдов) и сильно откидывает. Существует примерно 30 с.

<div className="text--center">

![Vortex_one](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_vortex_one.gif)

</div>

- Под [заклятием крови](https://www.wowhead.com/wotlk/ru/spell=70952)
  способность [сотрясающий вихрь](https://www.wowhead.com/wotlk/ru/spell=72037) заменяется
  на [могучий вихрь](https://www.wowhead.com/wotlk/ru/spell=72038) **(4.5 c.)**: под каждым игроком
  на арене появляется белая воронка которая моментально активируется, но взорвётся только 1 раз.

<div className="text--center">

![Vortex_fail](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_vortex_fail.gif)

</div>

</TabItem>
<TabItem value="Taldaram" label="Талдаран" attributes={{className: styles.taldaram}}>

Этот принц тоже танкуется обычным танком. Все способности, что он применяет, наносят урон от <span className="dmg-fire">
огня</span>, по области.

- [Ослепительные искры](https://www.wowhead.com/wotlk/ru/spell=71807) **(мгновенное)**: выпускает в конусе перед собой
  обжигающие искры (можно представить как "дыхание" но узкое, 45 гр.). Игрокам в зоне поражения наносится 16720-18480
  урона от <span className="dmg-fire">огня</span>. Замедляет скорость передвижения на 40% на 8 с. Данное замедление
  является <span className="debuf-magic">магическим</span> дебаффом, который можно сдиспелить. (крч это нужно просто
  отворачивать Талдарама от рейда и всё)
- [Колдовское пламя](https://www.wowhead.com/wotlk/ru/spell=71718) **(3 с.)**: принц создаёт над собой огненный шар,
  который полетит в случайного игрока и нанесёт 12000 <span className="dmg-fire">
  огненного</span> урона в радиусе 15 ярдов.

<div className="text--center">

![fireballsmall](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_SMALLfireball.gif)

</div>

- Под [заклятием крови](https://www.wowhead.com/wotlk/ru/spell=70952)
  способность [колдовское пламя](https://www.wowhead.com/wotlk/ru/spell=71718) заменяется
  на [жаркое колдовское пламя](https://www.wowhead.com/wotlk/ru/spell=72040) **(3 с.)**: принц создаёт над собой
  ОГРОООООМНЫЙ огненный шар, который полетыт в случайного игрока и нанесёт 120 000 <span className="dmg-fire">
  огненного</span> урона всем в радиусе 15 ярдов. **ОДНАКО!** Шар этот крайне нестабилен, и если он по пути заденет
  других игроков, то даст в них [опаляющие вспышки](https://www.wowhead.com/wotlk/ru/spell=71708) **(
  1500 <span className="dmg-fire">огненного</span> урона)**, которые чуть-чуть
  снизят урон от взрыва. Чем больше игроков шар
  заденет [опаляющей вспышкой](https://www.wowhead.com/wotlk/ru/spell=71708) тем меньше будет урон от взрыва, вплоть до
  12 000.

| Шар летит в мага, по дороге немного задевает игроков своими  [опаляющими вспышками](https://www.wowhead.com/wotlk/ru/spell=71708) |             Шар прилетел. Почти не шотнул, но снижение урона недостаточно             |
|:---------------------------------------------------------------------------------------------------------------------------------:|:-------------------------------------------------------------------------------------:|
|                       ![ball1](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_BIGfireball.gif)                        | ![ball2](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_BIGfireball2.gif) |

</TabItem>
</Tabs>

## Подготовка к энкаунтеру

:::info
[Героизм](https://www.wowhead.com/wotlk/ru/spell=32182)/[Жажду крови](https://www.wowhead.com/wotlk/ru/spell=2825) можно
сдавать либо в начале (под проки и препоты), либо же когда [заклятье](https://www.wowhead.com/wotlk/ru/spell=70952)
будет на <span className="dmg-shadow">Келесете</span>, когда в рейд не будет лететь вайп-механики.
:::

:::info
В данном бою нужны ауры защиты от [тёмной магии](https://www.wowhead.com/wotlk/ru/spell=48943) и
от [огня](https://www.wowhead.com/wotlk/ru/spell=48947).
:::

<div className="text--center">

### Распределение задач рейда на бой

</div>

<div className="text--center">

#### Кто кого должен танчить

</div>

Есть несколько вариантов с танками. <span className="dmg-shadow">Келесета</span> может танчить:

- Обычный танк, но лучше БДК. Он отхилиться может сам если что, имеет немало КДшек, а также меньше всего из всех танков
  страдает от магического урона. Также ему проще всего наагривать на себя летающие по комнате
  тучки [теневого резонанса](https://www.wowhead.com/wotlk/ru/spell=71943)
- Чернокнижнику. У лока тоже немало способностей/талантов на снижение входящего магического урона. Помимо всего лок
  будет лучше дамажить чем БДК.

Остальных двух принцев либо танчат в 2 танка, либо 1. В 1-го будет сложнее конечно, но возможно.

<div className="text--center">

#### Контроль кинетических бомб

</div>

[Кинетические бомбы](https://www.wowhead.com/wotlk/ru/spell=72053) - это шарики которые меееедленно спускаются с потолка
на землю. Чтобы они не упали и не взорвались,
нужно чтобы по ним нанёсся точечный урон. Обычно на них направляют питомцев Чернокнижников и Охотников. Эти зверята
автоматически будут "тыкать" бомбу, когда она будет подлетать к земле.

- [Кинетическая бомба](https://www.wowhead.com/wotlk/ru/spell=72053): у неё 1000
  здоровья, но на неё висит щит, который поглощает весь урон. Данный щит существует 60 с. А появляются каждые 20 с.
  Очень хорошо против них работают питомцы охотников и чернокнижников. Если они заставят своих петов атаковать эти
  шарики, то питомцы будут стоять под ними и автоматически кусать [бомбы](https://www.wowhead.com/wotlk/ru/spell=72053).
  **Суммарно нужно 3 "петоводов", чтобы гарантированно закрывать все бомбы.**

Если таковых нет, то нужно это делать РДД, что поделаешь.

<div className="text--center">
<b><i>

Волк сам будет кусать бомбы, главное дать дать питомцу команду
</i></b>

![Kus](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_kinetic_Kus.gif)

</div>

<div className="text--center">

#### Паладиновские рейдовые сейвы

</div>

Под каждого принца с [заклятьем крови](https://www.wowhead.com/wotlk/ru/spell=70952) нужны свои сейвы. Суммарно нужно
3 [сакры](https://www.wowhead.com/wotlk/ru/spell=64205) и ещё 3 каких-то других любых паловских сейва (либо [сакры](https://www.wowhead.com/wotlk/ru/spell=64205)
либо [владения аурами](https://www.wowhead.com/wotlk/ru/spell=31821))

<Tabs>
<TabItem value="Keleset" label="Келесет" attributes={{className: styles.keleset}} >

Танку Келесета нужно 48-50 с. выжить под мощными [копьями зловещих теней](https://www.wowhead.com/wotlk/ru/spell=71815).
Тут
не особо нужны какие-то сейвы на рейд (скорее нужны точечные).

</TabItem>
<TabItem value="Valanar" label="Валанар" attributes={{className: styles.valanar}}>

Под каст каждого [могучего вихря](https://www.wowhead.com/wotlk/ru/spell=72038) нужно
сдать [сакру](https://www.wowhead.com/wotlk/ru/spell=64205), чтобы гарантировано закрыть
их все, нужно 3 [сакры](https://www.wowhead.com/wotlk/ru/spell=64205) в рейде.

</TabItem>
<TabItem value="Taldaram" label="Талдаран" attributes={{className: styles.taldaram}}>

Под каждый каст [жаркого колдовского пламени](https://www.wowhead.com/wotlk/ru/spell=72040) нужно
сдать [владение аурами](https://www.wowhead.com/wotlk/ru/spell=31821)
под [ауру от огня](https://www.wowhead.com/wotlk/ru/spell=48947) (
или [сакру](https://www.wowhead.com/wotlk/ru/spell=64205)).
Чтобы гарантированно закрыть все касты [огромного огненного шара](https://www.wowhead.com/wotlk/ru/spell=72040) нужно
3 [владений аурами](https://www.wowhead.com/wotlk/ru/spell=31821)/[сакры](https://www.wowhead.com/wotlk/ru/spell=64205)

</TabItem>
</Tabs>

## Тактика на энкаунтер

### Начало боя. Расстановка

<div className="text--center">

![Valanar_plan](/img/icc/Blood_Princes_Council/BPC_Plan_Valanar.jpg)

</div>

<div className="text--center">

#### <span className="dmg-fire">Талдарам</span>

</div>

Танку нужно его взять и отвести направо. Нужно держать этого босса от рейда, иначе по людям
полетят [ослепительные искры](https://www.wowhead.com/wotlk/ru/spell=71807).

<div className="text--center">

#### <span className="dmg-shadow">Келесет</span>

</div>

Келесет отводится налево, попутно танк Келесета должен по дороге забрать на себя
тучки [теневого резонанса](https://www.wowhead.com/wotlk/ru/spell=71943), чтобы
уменьшить получаемый урон от кастов Келесета по себе.

<div className="text--center">

![Tuchi](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_tuchi.gif)

</div>

<div className="text--center">

#### <span className="dmg-phis">Валанар</span>

</div>

В начале боя под [заклятьем](https://www.wowhead.com/wotlk/ru/spell=70952) крови всегда будет Валанар. Это значит, что
по рейду под игроками будут спавнится [могучиие вихри](https://www.wowhead.com/wotlk/ru/spell=72039). РДД и Хилам <b>
очень важно</b>
держать /range 12 на запуле (и каждый раз, когда к Валанару
переходит [заклятье](https://www.wowhead.com/wotlk/ru/spell=70952)).

:::danger
***МДД и Танки:*** [могучиий вихрь](https://www.wowhead.com/wotlk/ru/spell=72039) кастуется 4.5 с. За это время нужно
отбежать на лестницу расспредано, чтобы вы не поубивали кого-нибудь.

<div className="text--center">

![Valanar_MDDSpread](https://www.wowhcb.ru/adepts/icc/Blood_Princes_Council/BPC_Valanar-SpreadMDD.gif)

</div>
:::

### Продолжение боя. Разные принцы - разные расстановки

:::caution
<details closed>
<summary>

Особенность перехода [заклятья крови](https://www.wowhead.com/wotlk/ru/spell=70952) от одного принца к другому
</summary>

Отличительной особенностью является то, что принцы меняются не совсем рандомно. Пока они все не
получат [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952) хотя бы 1 раз за "цикл", то они повторятся не
будут. <br/><br/> **_Например:_** Начало боя всегда начинается с <span className="dmg-phis">Валанара</span>. Допустим
спустя некоторое время
[заклятье](https://www.wowhead.com/wotlk/ru/spell=70952) перекинется <span className="dmg-fire">Талдарана</span>. Тогда
следующий принц, который окажется под [заклятьем](https://www.wowhead.com/wotlk/ru/spell=70952), 100%
будет <span className="dmg-shadow">Келесетом</span>. Всё, дальше будет новый "цикл", в которому принцы
полутают [заклятье](https://www.wowhead.com/wotlk/ru/spell=70952) ровно по 1 разу. и так далее.
</details>
:::

Три принца, три разные позиционки. Самые опасные моменты -
когда [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952) переходит от одного принца к другому. Потому что
Принцы никакие свои КД откладывать не будут. Если все стояли около <span className="dmg-shadow">Келесета</span> и
[заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952) переводится на <span className="dmg-phis">
Валанара</span>, которому по таймеру нужно через пару секунд
создать [отбрасывающуюся воронку](https://www.wowhead.com/wotlk/ru/spell=72037) в одном месте, то нет, он
под [заклятьем](https://www.wowhead.com/wotlk/ru/spell=70952)
сдаст [могучие вихри](https://www.wowhead.com/wotlk/ru/spell=72039) под каждым игроком. Никто не будет ждать пока кто-то
там возьмёт /range 12 чтобы заэвейдить абилку.

<Tabs>
<TabItem value="Keleset2" label="Келесет" attributes={{className: styles.keleset}}>

Если <span className="dmg-shadow">Келесет</span>
получает [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952), то это значит только одно:
танк <span className="dmg-shadow">Келесета</span> будет получать ОООЧЕНЬ много урона. Если танк не застакал 3
дебаффа [теневого резонанса](https://www.wowhead.com/wotlk/ru/spell=71943),
то почти гарантированная смерть. Под 3-мя стаками это тоже больно, но зато прохиливаемо.

И, на самом деле, больше ничего не происходит. Это отличная фаза для ДД, чтобы всем подамажить.

:::caution
Под случайным игроком може заспавнится белая воронка [сотрясающего вихря](https://www.wowhead.com/wotlk/ru/spell=72037),
от которой нужно отойти.
:::

:::danger
НИ В КОЕМ СЛУЧАЕ НЕЛЬЗЯ КЛИВАТЬ ОБЛАЧКА С [ТЕНЕВЫМИ РЕЗОНАНСАМИ](https://www.wowhead.com/wotlk/ru/spell=71943)!!! Только
под ними танк не умрёт с первого каста [копья зловещих теней](https://www.wowhead.com/wotlk/ru/spell=71815).
:::

<div className="text--center">

![Keleset_plan](/img/icc/Blood_Princes_Council/BPC_Plan_Keleset.jpg)

</div>

:::danger
Если есть шанс, что следующий принц будет Валанар, то нужно заранее РДД и Хилам сделать /range 12! Внимательно смотрим
за КД [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952).
:::

</TabItem>
<TabItem value="Valanar2" label="Валанар" attributes={{className: styles.valanar}}>

Для данного принца нужно РДД/Хилам держать спред /range 12! **Обязательно!** Перед
смены [заклятье крови](https://www.wowhead.com/wotlk/ru/spell=70952) если есть
шанс того, что именно Валанар получит [заклятье](https://www.wowhead.com/wotlk/ru/spell=70952), нужно заранее
разбежаться.

<div className="text--center">

![Valanar_plan](/img/icc/Blood_Princes_Council/BPC_Plan_Valanar.jpg)

</div>

</TabItem>
<TabItem value="Taldaram2" label="Талдаран" attributes={{className: styles.taldaram}}>

Под этого босса нужно наоборот сбежаться всем РДД с Хилами и встать поодаль от Талдарама.

Талдарам будет пускать ОГРОООМНЫЕ шары [жаркого колдовского пламени](https://www.wowhead.com/wotlk/ru/spell=72040).
Они будут лететь на конкретного человека. Чем дольше этот шар пролетит над головами других игроков, тем меньше урона
получит жертва (по дороге шар плюётся [опаляющими вспышками](https://www.wowhead.com/wotlk/ru/spell=71708), растрачивая
свою мощь).

:::caution
Ключевое слово **дольше прилетит**. Можно даже кому-то побежать вслед за шаром, чтобы
больше [опаляющих вспышек](https://www.wowhead.com/wotlk/ru/spell=71708)
было прокастовано.
:::

<div className="text--center">

![Taldaram_plan](/img/icc/Blood_Princes_Council/BPC_Plan_Taldaram.jpg)

</div>

</TabItem>
</Tabs>
