Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero. Print the decimal value of each fraction on a new line with  places after the decimal.
.400000
0.400000
0.200000
******************************************************************************

void plusMinus(vector<int> arr) {
    int n = arr.size();
    int positive=0, negative = 0,zero = 0;
    for( int j = 0;j<n;j++){
        if(arr[j]>0){
            positive++;
        }else if(arr[j]<0){
            negative++;
        }else{
            zero++;
        }
    }
    double ratio_pos = static_cast<double>(positive)/n;
    double ratio_neg = static_cast<double>(negative)/n;
    double ratio_zero = static_cast<double>(zero)/n;
    
    std::cout<<std::fixed<<std::setprecision(6);
    std::cout<<ratio_pos<<endl<<ratio_neg<<endl<<ratio_zero<<endl;
}
