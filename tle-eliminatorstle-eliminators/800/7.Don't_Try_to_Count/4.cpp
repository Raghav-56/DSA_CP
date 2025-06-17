#include <iostream>
#include <string>
#include <cmath>
#include <set>
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
        int n, m;
        // cout << "Enter n m: "<<flush;
        cin >> n >> m;

        string x, s;
        // cout << "Enter strings: "<<flush;
        cin >> x >> s;

        set<char> x_chars(x.begin(), x.end());
        bool possible = true;
        for (char c : s) {
            if (x_chars.find(c) == x_chars.end()) {
                possible = false;
                break;
            }
        }
        if (!possible) {
            cout << -1 << '\n';
            continue;
        }

        if (x.find(s) != string::npos) {
            cout << 0 << '\n';
            continue;
        }
        

        bool found = false;
        for (int ops = 1; ops <= 5; ops++) {
            x += x;
            if (x.find(s) != string::npos) {
                cout << ops << '\n';
                found = true;
                break;
            }
            // Memory optimization: keep only relevant suffix
            /* if (x.size() > 100) {
                x = x.substr(x.size() - 50);
            } */
        }

        if (!found) {
            cout << -1 << '\n';
        }
    }
    
    return 0;
}

// 124 ms

