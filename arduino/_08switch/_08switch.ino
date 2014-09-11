#define LED_PIN 13
#define BUTTON 2

void setup(){
  pinMode(LED_PIN, OUTPUT);
  pinMode(BUTTON, INPUT);

}

void loop(){
 if(digitalRead(BUTTON)==HIGH){
   digitalWrite(LED_PIN, HIGH);
 }else{
   digitalWrite(LED_PIN, LOW);
 } 
}
