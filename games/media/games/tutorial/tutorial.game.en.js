// ---------------------------------------------------------------------------
// Edit this file to define your game. It should have at least four
// sets of content: undum.game.situations, undum.game.start,
// undum.game.qualities, and undum.game.init.
// ---------------------------------------------------------------------------

/* A unique id for your game. This is never displayed. I use a UUID,
 * but you can use anything that is guaranteed unique (a URL you own,
 * or a variation on your email address, for example). */
undum.game.id = "be1c95b9-cbc7-48c6-8e6a-89837aa9113e";

/* A string indicating what version of the game this is. Versions are
 * used to control saved-games. If you change the content of a game,
 * the saved games are unlikely to work. Changing this version number
 * prevents Undum from trying to load the saved-game and crashing. */
undum.game.version = "1.0";

/* A variable that changes the fade out speed of the option text on
 * a mobile. */
undum.game.mobileHide = 2000

/* A variable that changes the options fade out speed. */
undum.game.fadeSpeed = 1500

/* A variable that changes the slide up speed after clicking on an
 * option. */
undum.game.slideUpSpeed = 500

/* The situations that the game can be in. Each has a unique ID. */
undum.game.situations = {
    start: new undum.SimpleSituation(
        "<h1>La vida o la muerte</h1>\
        <p>Hacía mucho, mucho tiempo, una joven cazatesoros se disponía a hacer lo que\
        siempre había hecho su padre: explorar y descubrir los mayores tesoros del mundo,\
        aquellos que tanta historia tenían y tanto peligro mostraban. Durante años, Daniela\
        Colby, la hija del historiador e investigador John Colby, fue viajando a aquellos\
        tesoros y sitios sin explorar que su padre reflejó en su diario hasta que un día,\
        cansada de jugarse la vida y nunca conseguir lo que realmente buscaba, se retiró de\
        esa vida tan peligrosa y tendente a la muerte.</p><br>\
        <img src='./media/img/pasado.png' height='320' width='500'>\
        <p><b>Año 2021</b>. Daniela es una chica aún joven pero ya con una vida hecha tras haber\
        dejado su mayor afición. Estaba casada con Andrew Stones, el mejor amigo de su\
        infancia y trabajaba en algo que tampoco estaba tan mal: desenterrar objetos extraños\
        de las entrañas de puertos y fondos marinos cercanos a las costas de ciudades.</p><br>\
        <p>Un día como otro cualquiera se levanta. Es domingo y no tiene que ir a trabajar\
        al puerto. Va directa a la cocina y antes de entrar por ella ve una carta tirada en\
        la puerta de su casa. Daniela se dispone a cogerla y se va directamente a la cocina.\
        Daniela tiene que decidir entre <a href='carta'>leer primero la carta</a> para ver de qué se trata o\
        bien <a href='desayuno'>tomar primero el desayuno e irse a pasear por el puerto</a>.</p>"
    ),

    carta: new undum.SimpleSituation(
        "<h1>La carta</h1>\
        <p>Daniela se dispuso a abrir la carta antes de hacer nada y descubrió algo que la\
        metió de nuevo en el pasado. La carta decía lo siguiente:</p>\
        <p style='padding-left:20px'><em><b>Hola Sra Colby, no hay tiempo de presentaciones así que voy a ir al grano.\
        Han descubierto pistas sobre Libertalia, aquella colonia que documentó su\
        padre John y que sabe que su historia es tratada por muchos como una\
        Leyenda. Pues bien, un barco pesquero rondó hace 3 días sobre las aguas de\
        Madagascar y se toparon con algo que fue inusual. De una de las islas que\
        rodeaban esas aguas salió un ruido atronador, como si hubiera caído algo.</b></em></p>\
        <p style='padding-left:20px'><em><b>Como sabe bien, la historia cuenta que todos los grandes piratas formaron\
        una colonia donde poder vivir sin obedecer a las leyes que había por aquel\
        entonces, dado que las consideraban mal hechas. La colonia encabezada por\
        por el capitán Misson, Thomas Tew y Henry Avery (aunque Misson nadie sabe\
        si realmente existió) juntó todos sus tesoros en esa colonia formando así la\
        primera colonia pirata, algo que parecía impensable.</b></em></p>\
        <p style='padding-left:20px'><em><b>El motivo por el que le escribo es simple: Terry Jones, su “amigo”, va hacia allí a quedarse con todo\
        lo que encuentre, algo que no deberíamos permitir dado que juega sucio y\
        destrozaría todo lo que se conocería como Libertalia, siendo esta un hallazgo\
        impresionante e histórico. Tiene que evitar que destruya toda Libertalia o\
        perderemos algo que sería un monumento histórico para la historia de los piratas.\
        Le esperará un barco mañana a la noche, espero que vaya por el bien de la historia.</b></em></p>\
        <p style='padding-left:20px'><em><b>Saludos de su viejo fiel amigo</b></em></p><br>\
        <p style='padding-left:20px'><em><b>Tom</b></em></p><br>\
        <img src='./media/img/carta.jpg' height='320' width='500'>\
        <p>A Daniela se le presenta la mayor oportunidad de su vida ya que, normalmente, no sale esta\
        información tan importante. Cuando algo tan espectacular como es información de Libertalia,\
        no viene en un mensaje de texto en el móvil ni en un correo electrónico y el hecho de que venga\
        en una carta sellada hace que esto tome aún mas valor. Terry Jones iba y eso hacía que sus\
        ansias aumentaran. Terry fue su amigo de investigación hasta que, en una aventura conjunta, él\
        la traicionó dejándola desamparada a merced de otra expedición que deseaba hacerse con el\
        botín de aquella aventura. Desde entonces, Daniela no volvió a verlo ni saber nada de él hasta\
        que la carta de hoy volvió a mostrar información sobre él.</p><br>\
        <p>Andrew se despertó y vino a la cocina y al ver a Daniela con cara algo descompuesta le pregunta\
        que si está bien. Ella responde que sí, aunque él no la cree ya que su semblante es algo extraño.\
        Daniela tiene que decidir entre <a href='revelacion'>contárselo ya</a> o <a href='ocultar'>ocultárselo</a> para no herirlo, ya que él sufrió\
        mucho cuando ella se iba a las antiguas investigaciones a explorar mundo.</p>"
    ),

    revelacion: new undum.SimpleSituation(
        "<h1>La revelacion</h1>\
        <p>Daniela decidió contarle toda la verdad sobre la carta ya que no quería mentirle y tras decirle\
        la historia de Libertalia escrita por Tom, su amigo explorador, era la oportunidad de su vida.</p><br>\
        <img src='./media/img/decepcion.jpg' height='320' width='500'>\
        <p>Andrew quedó desolado, pero entendió que era lo que Daniela siempre había deseado, cumplir\
        sus sueños y los de su padre. Pese a la tristeza que esto suponía, Andrew la animó a que fuera,\
        pero la última decisión la tenía Daniela. Decide entre <a href='explorar'>ir a explorar la isla</a> o <a href='quedarse'>quedarse en Brighton</a>.</p>"
    ),

    ocultar: new undum.SimpleSituation(

    ),

    desayuno: new undum.SimpleSituation(

    ),

    explorar: new undum.SimpleSituation(
        "<h1>Ida, ¿sin vuelta?</h1>\
        <p>Llegó el día siguiente y con ello el día de la despedida. Cayó la noche y Andrew empezó a temblar\
        de miedo. Sabía que Daniela se la jugaba, pero confiaba en ella como en nadie. Tras un último\
        abrazo, Daniela montó en el barco que la llevaría hasta el otro puerto de la ciudad. Tras eso,\
        tomaría un vuelo hacía Madagascar para después ya ir en barco hacia las islas donde se\
        rumorean que está Libertalia. El vuelo fue tranquilo, aunque largo y Daniela aterrizó a las 7-8\
        horas totalmente cansada. En el aeropuerto de Madagascar le esperaba Tom, el autor de la carta\
        y su amigo explorador. Se dieron un gran abrazo por todo lo que habían pasado juntos. Tom\
        estaba algo más viejo como era de esperar, pero su sonrisa tan contagiosa no se había ido.\
        Ambos se fueron a descansar a la casa que había alquilado Tom. Él siempre había sido tan\
        previsor que Daniela no se tenía que preocupar por nada. </p><br>\
        <img src='./media/img/barcoisla.jpg' height='320' width='500'>\
        <p>Al día siguiente, se prepararon bien. Cuando se pusieron a punto, salieron dirección islas de\
        Libertalia. Todo era precioso, se divisaba todas las islas y el arrecife de corales se veía a la\
        perfección al haber unas aguas tan cristalinas y limpias.</p><br>\
        <p>Tras llegar a la isla donde se escucharon los estruendos y la polvareda, Tom se encontró con otra carta\
         sobre una piedra en la arena de la orilla. Se la dio a Daniela y la leyó. Ponía lo siguiente:\
        <p style='padding-left:20px'><em><b>Por Dios y la Libertad camaradas, este lugar será testigo de la creación\
         de nuestro bastión y juntos seremos la unión de piratas más temida de todoslos mares. Esta unión solo es el\
        comienzo de algo mas grande, el dominio total de todos los mares y con ello, seremos recordados por siempre.</b></em></p>\
        <p style='padding-left:20px'><em><b>¡Por Libertalia!</b></em></p><br>\
        <p style='padding-left:20px'><em><b>Thomas Tew y Henry Avery</b></em></p><br>\
        <p>Esta carta ya tenía buenos presentimientos. A Daniela y Tom se le iluminaron los ojos. Tras este subidón,\
         Daniela tiene que decidir entre <a href='adentrarse'> adentrarse en la isla </a> o <a href='buscar'> buscar más\
        en la orilla de la isla </a> por si había algo.</p>"
      ),

    adentrarse: new undum.SimpleSituation(
        "<h1>Ida, ¿Libertalia?</h1>\
        <p>Daniela, dejándose llevar por la emoción, se adentró en la isla mientras Tom la seguía como podía.\
         Parece que a unos le pesan más la edad que a otros.</p><br>\
         <p>Daniela seguía leyendo una y otra vez la carta y se dio cuenta de algo que había pasado por alto debido\
          a la emoción del momento. La carta tenía en una de las esquinas, en la parte de atrás, un pequeño mapa sobre\
          un lugar con varias casas. Tenia que ser Libertalia ya que es donde aparte de guardar todo el tesoro, vivían\
          todos los piratas junto con sus familias. Tom no daba crédito ante tal hallazgo, aunque tenía un mal\
          presentimiento. A los 10 minutos de estar andando entre árboles y frondosos arbustos, el camino se dividía\
          en 2. El mapa no arrojaba pista en este sentido. Sólo salía un montón de casas junto con unas calaveras al\
          lado, luego Daniela y Tom estaban dudosos de qué camino escoger. Se podía divisar que el primer camino era\
          algo más oscuro y con un ruido algo extraño, aunque el camino parecía bastante seguro a priori. El segundo\
          camino parecía algo más iluminado pero también algo abandonado, aunque se podía pasar por él sin problemas.\
          En este segundo camino, al lado del camino Daniela pudo ver como una calavera parecida al mapa de la playa,\
          aunque esto no aseguraba nada a la cazatesoros. Daniela tiene que decidir entre <a href='camino1'>  ir por el primer\
          camino </a> o <a href='camino2'> por el segundo camino.</a> <img src='./media/img/caminos.jpg' height='320' width='500'></p>"

        ),

        camino1: new undum.SimpleSituation(
        "<h1>El comienzo del fin</h1>\
        <p>La cazatesoros y el explorador decidieron seguir por el camino más oscuro que, aunque seguro, emanaba\
         un ruido muy fuerte, algo que no transmitía confianza. Siguieron caminando tranquilos, bueno casi tranquilos\
         ya que Tom se ha topado con 2 arañas colgadas de una rama de un árbol y ha gritado como si no hubiera mañana.\
         Al cabo de un rato, dieron con el ruido que los tenía acongojados. Resulta que era una cascada enorme y el\
         agua chocando con el agua hacía que el ruido fuera ensordecedor. Se quedaron mucho más tranquilos en todos\
         los aspectos ya que divisaron unas construcciones justo en frente del camino. Daniela y Tom pasaron el puente\
         que había para poder pasar la cascada y fueron corriendo hacia esas construcciones. Si, era Libertalia.\
         No había lugar a fallos ya que la señal del mapa solo podía ser lo que tenían ante sus ojos. Cuando llegaron\
         a la entrada, algo descuidada y en un principio inaccesible, descubrieron la pista definitiva, el cartel con\
         una calavera igual a la de la carta de la playa. Todo salió a pedir boca hasta ese punto. Daniela y Tom no\
         tienen mas elección que <a href='entrar' > entrar a Libertalia.</a><img src='./media/img/cartel.jpg' height='500' width='320'></p>"




    ),









};

// ---------------------------------------------------------------------------
/* The Id of the starting situation. */
undum.game.start = "start";

// ---------------------------------------------------------------------------
/* Here we define all the qualities that our characters could
 * possess. We don't have to be exhaustive, but if we miss one out then
 * that quality will never show up in the character bar in the UI. */
undum.game.qualities = {
    Antorcha: new undum.OnOffQuality(
        "Antorcha", {priority:"0001", group:'inventario', onDisplay:"🔥"}),
    Espada: new undum.OnOffQuality(
        "Espada", {priority:"0002", group:'inventario', onDisplay:" ⚔️"}),
    Plata: new undum.NumericQuality(
        "Plata", {priority:"0003", group:'inventario'}),
    Oro: new undum.NumericQuality(
        "Oro", {priority:"0004", group:'inventario'})
};

// ---------------------------------------------------------------------------
/* The qualities are displayed in groups in the character bar. This
 * determines the groups, their heading (which can be null for no
 * heading) and ordering. QualityDefinitions without a group appear at
 * the end. It is an error to have a quality definition belong to a
 * non-existent group. */
undum.game.qualityGroups = {
    inventario: new undum.QualityGroup('Inventario', {priority:"0001"})
};

// ---------------------------------------------------------------------------
/* This function gets run before the game begins. It is normally used
 * to configure the character at the start of play. */
undum.game.init = function(character, system) {
    system.setQuality("Antorcha", false);
    system.setQuality("Espada", false);
    character.qualities.Plata = 0;
    character.qualities.Oro = 0;
};
