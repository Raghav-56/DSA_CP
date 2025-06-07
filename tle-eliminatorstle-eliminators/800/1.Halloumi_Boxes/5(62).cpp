#include <iostream>
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
        int n, k, a;
        // cout << "Enter n k: ";
        cin >> n >> k;

        if (k>=2 || n==1){
            cout<< "YES" <<endl;
        } else {
            bool is_sorted = true;
            int b;
            // cout<< "Enter 1st element" <<endl;
            cin >> a;
            n--;
            while (n && is_sorted){
                // cout<< "Enter next element" <<endl;
                cin>>b;
                n--;
                if (a>b) {
                    is_sorted = false;
                }
                a=b;
            }
            if (is_sorted){
                cout<< "YES" <<endl;
            } else {
                cout<< "NO" <<endl;
            }
        }
        while (n>0) {
            cin >> a;
            n--;
        }
    }
    return 0;
}

// 62ms
