def nonDivisibleSubset(S):
    List=[]
    Num=1
    while Num<=S:
        num=int(input("enter any number"))
        List.append(num)
        Num+=1
    print(List)
    num1 = int(input("enter any number "))
    i=0
    C=0
    while i<len(List):
        j=i
        while j<len(List):
            if (List[i]+List[j])%num1==0:
                C+=1
            j+=1
        i+=1
    print(C)
S=int(input("enter any number"))
nonDivisibleSubset(S)
