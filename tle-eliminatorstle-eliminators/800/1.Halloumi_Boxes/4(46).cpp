#include <iostream>
#include <vector>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num;
    // cout << "Enter num: ";
    cin >> num;

    while(num--)
    {
        int n, k;
        // cout << "Enter n k: ";
        cin >> n >> k;

        vector<int> arr(n);
        // cout << "Enter Array elements:";
        for (int i = 0; i < n; i++) 
            cin >> arr[i];

        if (k>=2 || n==1){
            cout<< "YES" <<endl;
        } else {
            bool is_sorted = true;
            for (int j = 1; j<n; j++){
                if (arr[j-1] > arr[j]) {
                    cout << "NO" <<endl;
                    is_sorted = false;
                    break;
                }
            }
            if (is_sorted)
                cout<< "YES" <<endl;
        }
    }
    return 0;
}

// 46ms
// 100kb
