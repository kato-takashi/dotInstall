#define LED_PIN 9

void setup(){
  pinMode(LED_PIN, OUTPUT);
}

void loop(){
  int i;
  for(i=0; i<256; i++){
    analogWrite(LED_PIN, i);
    delay(10);
  }
   
}
