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
        // cout << "Enter n x: " <<flush;
        cin >> n >> x;

        int answer = 1;
        int prev;
        int curr = 0;

        for (int i = 0; i < n; i++) 
        {
            prev = curr;
            // cout << "Enter the number: " <<flush;
            cin >> curr;

            if (i == 0) {
                answer = curr;
            } else {
                answer = max(answer, curr-prev);
            }   
        }

        cout << max(answer, 2* (x-prev)) << endl; 
    }
    
    return 0;
}

// 46 ms
