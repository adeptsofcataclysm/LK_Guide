---
sidebar_position: 8
title: Кологарн
description: Тактика на Килограмма
---

# Кологарн

![mosh](/img/ulduar/kologarn//kologarn.jpg)

Босс-кукла, состоит из тела и двух отдельных рук. И давайте определимся сразу, я буду называть руки "левая" и "правая"
исходя из названия, не их расположения. Так получилось, что босс повёрнут к нам лицом
и [левая рука](https://www.wowhead.com/ru/npc=32933) находится справа от входа,
а [правая рука](https://www.wowhead.com/ru/npc=32934) находится слева от входа.

Бой сконцентрирован на выживаемости рейда от всяких неприятностей Кологарна. Босс массово станит левой рукой, хватает и
дамажит людей правой рукой, режет пол лазерами из глаз, срезает потихоньку броню танка (танкам нужно меняться, как на
Аларе из ТК).

Каменный гигант преграждает путь к Хранителям Ульдуара. После смерти из его тела образуется мост, по которому можно
пройти дальше.

Разберём физиологию данного гиганта:

## Способности Кологарна ("тела")

***15 339 500*** здоровья

Босса можно таунтить.

Бьёт... тычками от 10 000 до 13 500 <span className="dmg-phis"> физического </span> урона (в латы) раз в ???с.
Визуально бьют левая и правая рука, но урон с "руки" наносит только тело. Если нет ни левой, ни правой руки, то босс
перестаёт бить и начинает спамить аоешку по рейду.

- [Подзатыльник](https://www.wowhead.com/wotlk/ru/spell=64003) **(мгновенный удар)**: босс бьёт двумя руками по своей
  цели. Наносит около 20 000 <span className="dmg-phis"> физического </span> урона по танку.
  Вешает [хруст доспеха](https://www.wowhead.com/wotlk/ru/spell=64002), снижающий броню на 25% на 45 с. Стакается.
  Кологарн бьёт этим ударом примерно каждые 15 с.
- [Подзатыльник одной рукой](https://www.wowhead.com/wotlk/ru/spell=64006) **(мгновенный удар)**: как ясно из названия,
  применяет если жива только одна рука. Тот же [подзатыльник](https://www.wowhead.com/wotlk/ru/spell=64003), но с
  уменьшенным уроном, около 13 500.

![bam](https://www.wowhcb.ru/adepts/ulduar/kologarn/smash.gif)

- [Сосредоточенный взгляд](https://www.wowhead.com/wotlk/ru/spell=63976) **(мгновенное)**: в случайного игрока (
  преимущественно в рендж зоне) направляются два лазера из глаз Кологарна. Каждый из них наносит от 3238 до 3762 ед.
  урона от тайной магии раз в секунду всем игрокам в радиусе 3 ярда от места "сверления" земли лазером. Лазеры
  существуют около 10 с., преследуют свою жертву. Босс применяет примерно каждые 20 с.

![lazers](https://www.wowhcb.ru/adepts/ulduar/kologarn/focused-eyebeam.gif)

- [Крик камня](https://www.wowhead.com/wotlk/ru/spell=64005) **(1.1 с ---> потоковое 2 с.)**: если у босса отсутствуют
  две руки, то начинает спамить данную способность. Каждые 0,2 с. всем участникам рейда наносится от 707 до
  793 <span className="dmg-phis">физического</span> урона. Когда отрастёт хоть одна рука, перестаёт орать и начинает
  применять свои обычные способности.

![scream](https://www.wowhcb.ru/adepts/ulduar/kologarn/stone-shout.gif)

- [Каменеющее дыхание](https://www.wowhead.com/wotlk/ru/spell=63980) **(мгновенное ---> потоковое 4 с.)**: если цель
  босса находится не в мили, то начинает мощно дышать по рейду. Хз, что вырывается изо рта, но видимо что-то очень
  смертельное. Каждую секунду рейд получает от 18 750 до 21 250 урона сил от <span className="dmg-nature">
  природы</span>.
  99% вайп, но это ещё не всё. Каждое получение урона накладывает стакающий
  дебафф [ломкая оболочка](https://www.wowhead.com/wotlk/ru/spell=62055), увеличивающий получаемый игроком урон на 20%
  за каждый стак. Дебафф существует 8 с.

![puffff](https://www.wowhcb.ru/adepts/ulduar/kologarn/petrifying-breath.gif)

## Способности рук

У каждой руки по ***2 300 925*** здоровья. У них нет милитычек, агролиста, просто летающие болванчики. У похотливых
ручонок есть свои способности. Естественно, если рук нет в живых, то и способности они не применяют.

### Способности правой руки

<div class="imgright">

![захват](https://www.wowhcb.ru/adepts/ulduar/kologarn/stone-grip.gif)

</div>

[Каменная хватка](https://www.wowhead.com/wotlk/ru/spell=64292) **(мгновенное)**: босс вытягивает свою правую руку и
хватает троих случайных игроков. Они получают от 3413 до 3587 <span className="dmg-phis">физического</span> урона раз в
секунду. Пока люди находятся в захвате они ничего не могут сделать (крч перманентный стан).
Если нанести 480 000 урона руке, то Калогарн вышвырнет этих игроков (их откинет в сторону выхода).
Если не освобождать захваченых персонажей, то спустя 10 с. босс 
применит [Добивание лежачего](https://www.wowhead.com/wotlk/ru/spell=64702).
Троице нанесётся под 85 000 <span className="dmg-phis">физического</span> урона, что означает смерть. 
Кологарн хватает троих игроков каждые 25с.


### Способности левой руки


<div className="imgright">

![удар по земле](https://www.wowhcb.ru/adepts/ulduar/kologarn/shockwave.gif)

</div>

[Ударная волна](https://www.wowhead.com/wotlk/ru/spell=63982) **(мгновенное)**: ударяет по земле, нанося всему рейду от
13 875 до 16 125 урона от сил <span className="dmg-nature">природы</span>. Применяет каждые 25 с.

<br />
<br />
<br />
<br />

### Общие способности

<div className="imgright">

![eleme](https://www.wowhcb.ru/adepts/ulduar/kologarn/arm-defeated.gif)

</div>

Если убить руку, то телу Кологарна наносится урон в размере 15% максимального запаса здоровья тела. Босс использует силу
земли для восстановления своих конечностей. Рука восстанавливается 60 с.

После уничтожения руки спавнится 5 [обломков](https://www.wowhead.com/ru/npc=33768) - каменных элементалей. У них по **130 330** здоровья,
бьют по 2000 <span className="dmg-phis">физическим</span> уроном в латы.
Применяют [каменную волну](https://www.wowhead.com/wotlk/ru/spell=63978) - АОЕшка на примерно
6000 <span sclassName="dmg-phis">физического</span> урона всем в радиусе 10 ярдов от обломка (также стакает дебафф на
+5%
к получаемому урону на 10 с.).

Этих мобов можно станить, замедлять, таунтить.

## Тактика

Особого расположения рейда как такового нет. Танки и МДД стоят перед ~~обнажённым сексуальным~~ торсом каменного
великана. РДД и Хилы берут небольшой спред, чтобы получить как можно меньше урона при
появлении [лазеров](https://www.wowhead.com/wotlk/ru/spell=63976).

![plan](/img/ulduar/kologarn/plan.jpg)

:::danger
Можно упасть в пропасть, перед обрывом у торса Кологарна никакой невидимой стенки нет!
:::

Нужно поставить [тотем на натур резист](https://www.wowhead.com/wotlk/ru/spell=58749) шаман
или [дух дикой природы](https://www.wowhead.com/wotlk/ru/spell=49071) охотника. Поможет
против [ударной волны](https://www.wowhead.com/wotlk/ru/spell=63982).

Для данного энкаунтера понадобятся минимум 3 танка для Кологарна, которые будут меняться по мере получения
стаков [хруста доспехов](https://www.wowhead.com/wotlk/ru/spell=64002). Им нужно менять друг друга на двух стаках
дебаффа. Иногда неактивному танку нужно будет забирать Обломки после смерти руки. Аддов отводят в сторону от рейда, чтоб
никто не получал лишнего урона от [каменных волн](https://www.wowhead.com/wotlk/ru/spell=63978). Элемов быстро заливают
РДД, а то танк нахватается стаков на получаемый урон и умрёт.

:::tip
Есть непроверенная инфа, что [подзатыльники](https://www.wowhead.com/wotlk/ru/spell=64003) могут уйти
в уклонение/промах/парирование. Инфа сотка? Не, не инфа сотка. TODO.
:::

:::caution
Когда танк будет забирать обломки, ни в коем случае нельзя
прожимать [масстаунт](https://www.wowhead.com/wotlk/ru/spell=1161)! Вы легко можете забрать босса на себя. Так как
обломки танкуются поодаль от МДД зоны, то затаунченный босс начнёт
дышать [каменеющим дыханием](https://www.wowhead.com/wotlk/ru/spell=63980).
:::

Хилам нужно следить за танками, особенно за активным. Удары
от [подзатыльников](https://www.wowhead.com/wotlk/ru/spell=64003) будут сносить половину здоровья под минус армором (обычные тычки тоже будут наносить 
тем больше урона чем меньше брони). 
Когда правая рука [захватит](https://www.wowhead.com/wotlk/ru/spell=64292) трёх игроков, их нельзя потерять. Особенно опасна ситуация,
когда хватают 1-2 хилов. Молимся что не 3! Следует назначить минимум двух хилов на прохил жертв. Также готовьтесь к
урону от [удара грома](https://www.wowhead.com/wotlk/ru/spell=63982) левой руки.

Для пачки Хилов и РДД есть общая задача - выводить лазер
от [сосредоточенного взгляда](https://www.wowhead.com/wotlk/ru/spell=63976). Как вариант выводить по краю комнаты, по
синим линиям на плане. Лучи движутся достаточно медленно РДД приоритетнее убивать сначала каменных аддов, затем дамажить
босса.

Хитбокс пуза и рук ооочень большой. Даже если МДД стоит перед торсом, то он может спокойно переключится на руки и
достать их. Ну, в крайнем случае нужно немного двинуться. Встаёт вопрос, что бить в приоритете? Если снести руку, то
снесётся 15% здоровья Кологарна. Если посчитать, то 15% это 2 300 925 здоровья. У каждой из рук как раз 2 300 925
здоровья. Математически ситуация эквивалентна, но есть парочка нюансов. Во-первых, хитбокс у частей тела настолько
большой, что кливы будут доставать если не до обоих рук, то точно до одной. Можно встать между правой рукой и торсом,
тогда 100% кливы будут попадать по двум целям. Во-вторых, мёртвая рука не применяет свои способности 60 с. да
и [подзатыльник одной рукой](https://www.wowhead.com/wotlk/ru/spell=64006) пробивает поменьше чем "целый"
[подзатыльник](https://www.wowhead.com/wotlk/ru/spell=64003). В-третьих, правая рука
будет [хватать](https://www.wowhead.com/wotlk/ru/spell=64292) троих челиков. Если не снести руке 480 000 здоровья за 15
с., то игроки умрут. Так что минимум правую руку не получится игнорировать. Левая
просто [долбит](https://www.wowhead.com/wotlk/ru/spell=63982) по земле раз в 25 с.

Самой "незапарным" вариантом считают следующим: ДД фокусируется на правой руке (кливая торс), после её уничтожения
переключаются на основное тело Кологарна. Левую руку оставляют в покое. Можно покливать, чтоб потом снести разом 15%
здоровья Кологарна в конце, но только в конце! Таким макаром рейд не будет сильно страдать
от [захвата](https://www.wowhead.com/wotlk/ru/spell=64292).

## Альтернативная тактика

Мне очень нравится вариант "незапарной" тактики. Она ненамного уступает "профитной", которая будет сейчас будет описана.
Но "профитная", как по мне, настолько тонкая для ДПСа, что ну её. Не рекомендую юзать её на освоении, и вообще мне она не
нравится своей рискованностью.

А самой "профитной" считается такая тактика:

1. Убиваем правую руку, кливаем через неё торс. Если рука [захватила](https://www.wowhead.com/wotlk/ru/spell=64292)
   людей, то босс довольно быстро их отпустит. Рейд снесёт 480 000 здоровья на раз-два.
2. После смерти правой руки переключаемся на левую, кливаем через неё торс. Всё пока прекрасно, похотливая ручонка не
   будет [хватать](https://www.wowhead.com/wotlk/ru/spell=64292) людей, а по танку босс бьёт немного слабее.
3. Оставляем левой руке немного здоровья, полностью фокусируемся на торсе. Ждём пока отрастёт правая рука.
4. Как только отросла правая рука рейду нужно добить левую руку. Отлично! Танки всё ещё получают меньше урона, а игроки
   избавились от [ударной волны](https://www.wowhead.com/wotlk/ru/spell=63982).
5. Сносим правой руке около 50% здоровья и переключаемся на торс. Переключаемся на правую руку ТОЛЬКО если она кого-то
   захватила, чтобы освободить жертв. Левая рука пока не выросла, если убить и правую, то
   под [криками камня](https://www.wowhead.com/wotlk/ru/spell=64005) рейд будет медленно, но уверенно сгнивать. Если
   зафокусить правую руку и оставить её лоу ХП, то при [захвате](https://www.wowhead.com/wotlk/ru/spell=64292) рейду по
   логике необходимо будет спасти своих соратников. Но тогда придётся уничтожить конечность, что опять заставит рейд
   страдать под [криками камня](https://www.wowhead.com/wotlk/ru/spell=64005). Поэтому мы и фокусим правую руку после
   50% её здоровья ТОЛЬКО если она кого-то захватила. Оставляем 50% на те случаи, чтобы освобождать людей
   от [захвата](https://www.wowhead.com/wotlk/ru/spell=64292).
6. Когда тайминг возрождения левой руки начнёт проходить, можно уже потихоньку добивать праву руку. Ну и добиваем одну,
   когда ресается другая.
7. Сносим почти фул ХП левой руке, затем переключаемся на торс. Ждём возрождение правой руки.
8. Возвращаемся к шагу "4".
   Если у торса остаётся не так уж и много здоровья, то можно бросить бить руки.

| Убиваем только правую руку                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     | Убиваем обе руки                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                          |
|:---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|:--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| <span className="dmg-nature">Плюсы:</span> <br /><br /> - Рейд не страдает от [захвата](https://www.wowhead.com/wotlk/ru/spell=64292) <br /> - Проста в исполнении <br /> - Меньше обломков от поломанных рук. <br /><br /> <span className="dmg-fire">Минусы:</span><br /><br /> - В рейде могут быть смерти от комбухи [захвата](https://www.wowhead.com/wotlk/ru/spell=64292) + [ударной волны](https://www.wowhead.com/wotlk/ru/spell=63982) + [лазеров](https://www.wowhead.com/wotlk/ru/spell=63976). <br /> - Хилам тяжелее прохиливать урон по рейду. <br /> - Танкам будет больнее от [подзатыльников](https://www.wowhead.com/wotlk/ru/spell=64003). | <span className="dmg-nature">Плюсы:</span><br /><br /> - Рейд не страдает от одновременных [захватов](https://www.wowhead.com/wotlk/ru/spell=64292) и [ударных волн](https://www.wowhead.com/wotlk/ru/spell=63982), либо то либо другое <br /> - Танки получают [подзатыльник одной рукой](https://www.wowhead.com/wotlk/ru/spell=64006) а не двумя руками. <br /> - Босс убивается быстрее. <br /><br /> <span className="dmg-fire">Минусы:</span><br /><br /> - Сложно в исполнении, нужно постоянно следить за уроном. Крайне не рекомендую для освоения и для десяток. <br /> - Будет немало обломков от поломок обоеих рук. <br /> - Будет больше [захватов](https://www.wowhead.com/wotlk/ru/spell=64292) по рейду. |

## Видео убийства
