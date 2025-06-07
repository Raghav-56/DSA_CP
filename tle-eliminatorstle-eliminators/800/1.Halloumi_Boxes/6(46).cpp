#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num = 0;
    // cout << "Enter num: ";
    cin >> num;

    while (num--)
    {
        int n, k;
        // cout << "Enter n k: ";
        cin >> n >> k;

        bool answer = true;
        int prev;

        for (int i = 0; i < n; i++) 
        {
            int curr;
            // cout << "Enter the number: ";
            cin >> curr;

            if (k<2 && n!=1){
                if (i == 0) {
                    prev = curr;
                } else if (prev > curr) {
                    answer = false;
                } else {
                    prev = curr;
                }
            }
        }

        cout<< (answer? "YES" : "NO") << endl; 
    }
    
    return 0;
}

// 46ms
