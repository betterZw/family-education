
#include <stdio.h>

int fun(int n)
{
    switch (n)
    {
    case 0:
    case 1:
    case 2:
        return 1;
        break;
    }
    return (fun(n-1) + fun(n-2));
}

int main(int argc, char const *argv[])
{
    printf("%d", fun(6));

    return 0;
}
