#include <iostream>
#include <vector>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num = 0;
    // cout << "Enter num: ";
    cin >> num;

    vector<bool> val(num, true);

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

        if (k>=2 || n==1){continue;}

        for (int j = 1; j<n; j++){
            if (arr[j-1] > arr[j]) {
                val[i] = false;
                break;
            }
        }
    }
    for (const bool& v: val){
        v? cout<< "YES" <<endl : cout << "NO" <<endl;
    }
    
    return 0;
}


// 46ms
