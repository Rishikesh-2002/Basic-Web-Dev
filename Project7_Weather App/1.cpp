#include <iostream>
using namespace std;

class Human
{
private:
    int height;

public:
    int weight;

private:
    int age;

public:
    int getAge()
    {
        return this->age;
    }
    void setWeight(int w)
    {
        this->weight = w;
    }
};

class Male : public Human
{
public:
    string color;
    void sleep()
    {
        cout << "Male Sleeping " << endl;
    }

    //	int getHeight(){
    //		return this->height;
    //	}
};

int main()
{
    Male m1;
    m1.setWeight(10);
    cout << m1.weight << endl;
}