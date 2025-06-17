#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int t;
    // cout << "Enter t: "<<flush;
    cin >> t;

    while (t--)
    {
        int n, k;
        // cout << "Enter n k: "<<flush;
        cin >> n >> k;

        bool possible = false;

        for (int i=0; i<n; i++) {
            int a;
            cin >> a;
            if (a==k) {
                possible = true;
            }
        }

        cout << (possible? "YES" : "NO") << "\n";

    }
    
    return 0;
}

// 62 ms
