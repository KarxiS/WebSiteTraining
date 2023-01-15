<?php

   


    if ($_SERVER["REQUEST_METHOD"] == "POST") {

        # FIX: Replace this email with recipient email
        $to = "info@email.sk";
        
        #clear unnecessary characters, prevents security breach
        function cisticInputu($input) {
            $input = trim($input);
            $input = stripslashes($input);
            $input = htmlspecialchars($input);
            return $input;
        }

        # Sender Data
        $name = str_replace(array("\r","\n"),array(" "," ") , cisticInputu($_POST["name"]));
        $surname = str_replace(array("\r","\n"),array(" "," ") , cisticInputu($_POST["surname"]));
        $phone = cisticInputu($_POST["number"]);
        $email = filter_var(cisticInputu($_POST["email"]), FILTER_SANITIZE_EMAIL);

        $message = $_POST["message"];
        $subject = "Záujem o ----- " . $name ;
        
        if ( empty($name) OR !filter_var($email, FILTER_VALIDATE_EMAIL) OR empty($phone)) {
            # Set a 400 (bad request) response code and exit.
            http_response_code(400);
            echo "Prosím, vyplňte povinné polia";
            exit;
        }
        


        # email headers.
        $headers = "Od: $name <$email>";


        







        # Send the email.
        function send_email($to, $from, $subject, $message)
{
  $headers = "MIME-Version: 1.0" . "\r\n";
  $headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";
  $headers .= "Od: info@email.sk <" . $from . ">\r\n";
  return mail($to, $subject, $message, $headers);
}

function build_email_template( $logoHoreOdkaz, $logoHorePic,$nadpis,$text1,$text2,$text3,$footerLavo1,$footerLavo2,$footerLavo3,$footerLavo4,$footerPravo1,$footerPravo2Odkaz,$footerPravo2Text)
{
    // Get email template as string
    $email_template_string = file_get_contents('emailContact.html', true);
    // Fill email template with message and relevant banner image
    $email_template = sprintf($email_template_string, $logoHoreOdkaz, $logoHorePic,$nadpis,$text1,$text2,$text3,$footerLavo1,$footerLavo2,$footerLavo3,$footerLavo4,$footerPravo1,$footerPravo2Odkaz,$footerPravo2Text);
    return $email_template;
}

        # Mail Content
         $logoHoreOdkaz = "text";
         $logoHorePic = "textg";
         $nadpis = "Záujem o konzultácie";

        $text1 = "Údaje o klientovi";
        $text2 = "Meno: $name $surname <br>";
        $text2 .= "Telefón: $phone<br>";
        $text2 .= "Email: $email<br>";
        $text3 = "Správa: $message<br>";

        $footerLavo1= "text";
        $footerLavo2= "text";
        $footerLavo3= "text";
        $footerLavo4= "text";
        $footerPravo1= "text ";
        $footerPravo2= "text";
        $footerPravo2Odkaz = "text";
        $final_message = build_email_template( $logoHoreOdkaz, $logoHorePic,$nadpis,$text1,$text2,$text3,$footerLavo1,$footerLavo2,$footerLavo3,$footerLavo4,$footerPravo1,$footerPravo2Odkaz,$footerPravo2);
    $success=send_email($to,$email, $nadpis, $final_message);


    
if ($success) {
            # Set a 200 (okay) response code.
            http_response_code(200);
            echo "Ďakujeme. Naši konzultanti vás kontaktujú čo najskôr";
            
            exit();
            
            
        } else {
            # Set a 500 (internal server error) response code.
            http_response_code(500);
            echo "Ups! Nastal problém pri spracovaní. Skúste znova neskôr";
            exit();
        }

    } else {
        # Not a POST request, set a 403 (forbidden) response code.
        http_response_code(403);
        echo "Ups! Nastal problém pri spracovaní. Skúste znova neskôr";
        
    }

    
exit;
?>
