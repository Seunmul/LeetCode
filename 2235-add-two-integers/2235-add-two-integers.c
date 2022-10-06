

int sum(int num1, int num2){
    if(num1<-100 && num2<-100 && num1>100 && num2>100)
    {
        return false;
    }
    return num1+num2;
}