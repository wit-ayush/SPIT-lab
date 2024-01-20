import math
import matplotlib.pyplot as plt
import matplotlib.ticker as ticker

class Funct:
    def n(self, n):
        for i in range(101):
            n.append(i)
            
    def n3(self, n):
        for i in range(101):
            n.append(i**3)
            
    def lgn(self, n):
      for i in range(101):
        if i == 0:
            continue
        n.append(math.log(i) / math.log(2))
            
    def twon(self, n):
        for i in range(101):
            n.append(2**i)

    def nlgn(self, n):
      for i in range(101):
          if i == 0: 
              continue
          n.append(i * (math.log(i) / math.log(2)))     
            
    def lgn2(self, n):
        for i in range(101):
          if i == 0: 
              continue
          n.append(2**(math.log(i) / math.log(2)))
            
    def n2n(self, n):
        for i in range(101):
            n.append(i * 2**i)
            
    def en(self, n):
        for i in range(101):
            n.append(math.exp(i))
            
    def lglgn(self, n):  
        for i in range(101):
          if (i == 0 or i == 1) : 
            continue
          n.append(math.log(math.log(i)))
            
    def lg2n(self, n):
        for i in range(101):
          if i == 0: 
            continue
          n.append(2*(math.log(i)/math.log(2)))
            
    def factoriall(self, n):
        for i in range(1, 21):
            factorial = 1
            for j in range(1, i+1):
                factorial *= j
            n.append(factorial)

if __name__ == "__main__":
    func = Funct()
    
    n = []
    n3 = [] 
    lgn = []
    twon = []
    nlgn = []
    lgn2 = []
    n2n = []  
    en = []
    lglgn = []
    lg2n = []
    factoriall = []
    
    func.n(n) 
    func.n3(n3)
    func.lgn(lgn)
    func.twon(twon)  
    func.nlgn(nlgn)
    func.lgn2(lgn2)
    func.n2n(n2n)
    func.en(en)
    func.lglgn(lglgn)
    func.lg2n(lg2n)
    func.factoriall(factoriall)

    plot_data = [
      (n, "n"),
      (n3, "n^3"),
      (lgn, "log(n)"),
      (twon, "2^n"),
      (nlgn, "nlog(n)"),
      (lgn2, "2^log(n)"),
      (n2n, "n2^n"),
      (en, "e^n"),
      (lglgn, "log(log(n))"),
      (lg2n, "log^2(n)"),
    ]

    for data, label in plot_data:
      plt.plot(data, label=label)
      
    # X Axis
    plt.xticks(range(0, 101, 10)) 
    plt.xlabel("Input (1 to 100)")

    # Y Axis
    plt.ylim(0, 100)

    fmt = ticker.StrMethodFormatter('{x:,.0f}')
    ax = plt.gca()
    ax.yaxis.set_major_formatter(fmt)

    plt.ylabel("Output Value")

    plt.legend()
    plt.title("Function comparision using Graphs without factorial")
    plt.show()

    plot_data2 = plot_data + [(factoriall, "factorial")] 

    for data, label in plot_data2:
      plt.plot(data, label=label)

    plt.xticks(range(0, 101, 10)) 
    plt.xlabel("Input (1 to 100)")

    plt.ylim(0, 100)

    fmt = ticker.StrMethodFormatter('{x:,.0f}')
    ax = plt.gca()
    ax.yaxis.set_major_formatter(fmt)

    plt.ylabel("Output Value")

    plt.legend()
    plt.title("Function comparision using Graphs with factorial")
    plt.show()