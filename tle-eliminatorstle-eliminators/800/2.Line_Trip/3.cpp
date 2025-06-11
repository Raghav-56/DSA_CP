#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num;
    cin >> num;

    while (num--)
    {
        int n, x,  max_gap, prev, curr;
        cin >> n >> x >> max_gap;
        prev = max_gap;
        
        while (--n) 
        {
            cin >> curr;
            max_gap = max(max_gap, curr-prev);
            prev = curr;
        }

        cout << max(max_gap, 2* (x-prev)) << endl; 
    }
    
    return 0;
}

// 62 ms
