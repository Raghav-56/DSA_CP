#include <iostream>
using namespace std;

int main()
{
    ios_base::sync_with_stdio(false);
    cin.tie(nullptr);

    int num;
    // cout << "Enter num: "<<flush;
    cin >> num;

    while (num--)
    {
        int n, x;
        cin >> n >> x;

        int prev, curr;
        cin >> curr;
        int answer = curr;

        for (int i = 1; i < n; i++) 
        {
            prev = curr;
            // cout << "Enter the number: " <<flush;
            cin >> curr;
            answer = max(answer, curr-prev);
        }

        cout << max(answer, 2* (x-prev)) << endl; 
    }
    
    return 0;
}

// 46 ms
