#include <iostream>
#include <vector>
using namespace std;
 
bool check(vector<int> arr, int k, int n)
{
    if (k>=2 || n==1){return true;}
 
    for (int i = 1; i<n; i++){
        if (arr[i-1] > arr[i]) {
            return false;
        }
    }
    return true;
}
 
int main()
{
    int num = 0;
    // cout << "Enter num: ";
    cin >> num;
 
    vector<bool> val(num, false);
 
    for (int i=0; i<num; i++)
    {
        int n, k;
        // cout << "Enter n k: ";
        cin >> n >> k;
 
        vector<int> arr(n);
        // cout << "Enter Array elements:";
        for (int i = 0; i < n; i++) 
        {
            cin >> arr[i];
        }
 
        val[i] = check(arr, k, n);
    }
    for (const bool& v: val){
        v? cout<< "YES" <<endl : cout << "NO" <<endl;
    }
    
    return 0;
}

//77ms
