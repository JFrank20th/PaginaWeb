<?php
    $variable="fernando";
    $variable1=10;
    $contador=1;
    echo("Hola mundo".$variable);
    if ($variable1<10) {
        echo("Menor");
    }else{
        echo("Mayor");
    }

    while ($contador <= $variable1) {
        echo("<br><h2>La variable contador va en: ".$contador."</h2>");
        $contador+=1;
    }

    function horaServidor(){
        echo("la hora es: ".date('d m Y'));
    }

?>