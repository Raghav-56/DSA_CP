#include <cstdio>
#include <cstring>
using namespace std;

int main()
{
    int num;
    scanf("%d", &num);

    while (num--)
    {
        int n;
        scanf("%d", &n);

        char ss[100];
        scanf("%s", ss);

        int dots = 0;
        bool hasThreeConsecutive = false;
        int consecutiveCount = 0;

        for (int i = 0; i < n; i++) {
            if (ss[i] == '.') {
                dots++;
                consecutiveCount++;
                if (consecutiveCount >= 3) {
                    hasThreeConsecutive = true;
                }
            } else {
                consecutiveCount = 0;
            }
        }

        if (dots == 0) {
            printf("0\n");
        } else if (hasThreeConsecutive) {
            printf("2\n");
        } else {
            printf("%d\n", dots);
        }
    }
    
    return 0;
}

// 61 ms
