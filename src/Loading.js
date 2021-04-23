import React from 'react'
import {ThreeBounce}  from 'better-react-spinkit'
import './Loading.css'

function Loading() {
    return (
        <div className='loading'>
            <div className='loading__content'>
                <img height={200} style={{ marginBottom: 20 }} src='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxESEBIQEhAVFhUXGBkWFRYVFRcXGRkXFRUWFhgYFRUZHSgiGBolHRUWITEiJSkrLi4uGB8zODMsNygtLisBCgoKDg0OGxAQGy0mICYvLS81Ly0rLS8vLS0tLS0tLS8vLS0tLS0tLS0tLS0vLS0tLS0tLS0vLS8tLS0tLS0tL//AABEIAMAAwAMBIgACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcEBQIDCAH/xABAEAABAwICBgYIAwcEAwAAAAABAAIDBBEFIQYSMUFRYQcicYGRoRMyUmJyscHRI0KSFCSCorLh8ENTc9IzY4P/xAAbAQACAwEBAQAAAAAAAAAAAAAABAMFBgIBB//EADYRAAEDAgMFBwMCBgMAAAAAAAEAAgMEEQUhMRJBYXGBUZGhscHR8AYTMiIjFDNCwuHxYnKy/9oADAMBAAIRAxEAPwC8UREIRERCEREQhEWup8XgkmdAyVrpGt1nBudgCBm4ZXuRktivSCNV4CDoiIi8XqIiIQiIiEIiIhCIvixX4hC31pmDte0fVCDkstFiMxCE7JmHse0/VZV77EIGei+oiIQiIiEIiIhCItdjGLw0sfpZn2GwDa5x4NG8qp9J9N6iquxhMUXstObh77t/YMu1TRQOk007UtPVMh1zPZ80U/x/TelprtafSyD8rDkD7z9g7rlVxjumVXVXaX6kZ/IzIW947XfJR5rSTYC55/QLuqaV0dtYWv4ZZ5+KsGQxRkDedL6nkFVyTzzNc4A7Ite17C+lzz49Cph0TP8A3x44xu8nMVuKneit1q7tY4f0n6K4knWfzegT+H/yepRERKp5EREIRF1SyNa0ucQABckmwAG0k7gqy0u6QHPLoaQlrdhl2Od8Hsjnt7FLFE6Q2aoZp2Qtu5TPH9KqakuHv1n/AO2zN3fub3qAYv0j1UlxCGwt5dZ3e45eAULc4k3JuT8ythTYQ92buqOeZ8Pum3sp6Zu3M4dfQb+WZVcySrrH7EDTyHqcgPBdNZis8pvJM5/xOJ8li5qRxYLHva53Mmw8rLLbhzPYHmfqq+T6jpGZMDjyAHmQfBWLPpeqfnK9oPMk+R8yojmsqkxKaI3jlcz4XEfIqRuw5nsDz+6xZcFj3N1eYNx53RH9R0j8nBw5gHyJPgh/0vVMzje0nmQfIeYWfhHSLVRECa0zd9+q7ucPqCrGwDSKnrG3id1h6zHZOHdvHMKlKzC3sF/WHEfULHpKt8T2yRvLXNNw4HMKxDIKlm3CRzHkRuPDIquMtTRyfbnaeR16Hf4hejUUb0N0kbWw3dYSssJGjyc0cD5FSRIOaWktKtWPD2hzdCi0+keOR0cBlfmdjG3zc7h2cStwqM02xs1VU9wP4bCWRj3Qcz3nPw4KWnh+46x0S9XUfZZcanRa7GcXmqpTLK65OwbmjcGjcFxocPdJnsbx+3Fc8LofSHWPqjz5KTwwhoGVrbBuCgxbGBSfsw/l4N6bzv7BqewyYPgv8UP4io/DcN7jz3N8TbJY1HQtYMhbiTtP2Ws0hiu1h4EjxW7km4eKwsQh143NHb3jNZ3D6t4rWTSm9zYk65gjuF78rrVYhRB9BJBG0AWyAyzadrxt3m6xdA6sRYhA4mwLtQ/xAtHmQr0Xm1jyCCDYjMH5K+dF8YbV0zJQRrW1ZBweBn47RyK2NczR3RYbDJRYs6+nstyiIkFaouuV4aC4kAAXJOQAG0k7guxVl0maTXJoonbP/MRvO5vYNp8NxUkUZkdshQzzNiZtH/a1OnOl7qp5hiJEDT2GQj8zvd4DvPKKQU7nuDWi5Xynhc9wa0ZlSmgogxth3niVLiOIR4fEGtF3HQep69+61sl8Mw2TEZTJIbMGp/tb8y43z6sOwxrNmbvaP04LYhrWpJIBkFjk3WGmnlqHmSU3J8vQcBkt9BTxwxiOJoa0bh8zPE5rtdPwC4GQ8VxRcBoCY2QuWseJQSHiuKL2yLLmXA7QtBjNFq/iNGR2jgfsVvFj17NaN45X8Df6KwwqpdTVLS3QkAjgcvC9x3aEqtxeiZVUj2kZgEt4EC/jax4cgsHQ7GP2WrjkPqE6j/hdkT3ZHuV8LzaNq9CYO8up4XHaY2E9paFsa5uYcsLhjzZzeR+dy445OWU07xtbG8jtDSvPhK9EYnTelgli9tjm/qaQvOsrS1xaRYg2I5jIhe0JADui5xMElvI+imGFwhrGN3Wv3nMfNZEz9ywMEqw5gzzaNV3K+wrLdtWErGPbUyCTXaPiSfW/Ir6HROY+CN0f47LbcLC1uhyPFfERFAnFHsYpNR+uPVdsHDiPqszRPSN9FNrjrRusJGcRxHvDctlLGHtLXC4KjWI0LonZ5g7Dx5citnhWJNqY/sy/mBb/ALDt5jf37zbBY1hL6SU1MH4E3y/pJ/tJ03D8csr37huIxVEYlieHNO8bjwI3Hks1eesEx6ekfrwvt7TTm13Jzd/zVnYD0iU0wDZ/wX882Hsd+Xv8UxLTObm3MeKWgrWPydkfBbnS/GxR0zpAeuerGPeO+3ADNUXJIXEuJuSbkneTtJUn6RsdFTVFjHAxRDVaQbgk5ucO/LuC02CU2u/XOxudue4Jhr2UsBlfzPoOfZxKWfG+tqWwx9th6np6Lb4PRarcx1j63ZwWzkfqiwRg1RddDjc3Xz+onfUymWTU/LDgPmZX0Wmp44I2xRj9LfhJ4nUr4iIuE0iLjJI1ou4gDiVhHGIPbPbq5eCnhpZ5heNhPIFLz1cEBtK9reZA+eXFZ6LjG4OAINwcwQuShzBsVODcXCLExObUice4fL7rLUcxmt13ajT1W+Z49m5WWE0pnqW9jSHHoch1I7gTuVXjVYKakdn+pwLR11PQZ33ZdoWNRwGSRkbR1nODR2uNgvRFNCGMawbGtDR2NFvoqt6K8CMkprHjqR5MvvcRmexoPiRwVsLV1km04N7PNYvD4i1hed/l/u6Koek/RsxSmrjb+HIevb8kh3nk7b235K3l01MDJGOje0Oa4Wc0i4IO4hLxSGN1wmp4RKzZK85UtU6N2s0/35KSUOIslFgetvafpxCzdL+j2WAumpQZIsyWbXs/7t57ePFQO5C7rKGCubtaOG8a8iN/yxzKhocSqMOdsWu0/wBJ8wdx7x2gnNTtfVFqTHJGZO6497I/q+628GNQu2uIPvbPLJZmfCKqHPZ2h2tz8NfAjitfS43Rz/1bJ7HZeOh6FbJHsBBaQDfcdhXGN4cLtII5G652VYbh1tCOh91a6jh3/wC1o6/A9pjy907e4/52rSzRuabOBB4f5t71Nw7ccwj4GuFjYjg4K9pcfmjAbMNoduh9j1zO8lZyt+nKeU7UR2D2at7r5dDYbgoJdTLBqXUja0jMdZ3ad307l0yYDHcEMcLcDcHO9s1t447C5XOL4tHUxNZFe17m46Acd+h1AXOD4Q+jkfJIQTYAWN9cz5Dx3LqqHbl1LmQmqqIZLSDLJcFj1lU2Juse4cSszVWjr8LmmkLiQG/lBdew7htT1DFDJL+84NaNbm1+A9ewcbJLEJ5oov2GFzzkMshxPoN54XWmq610jtZx7BuC6Y2lxAAJJ2AbT2LfQaONHryX5AW8yttS0TIh1WgcSdveStHNjlJAzYhF7ZAAbLe828L++Uh+n6yokL6h1r6knaceguO85di+YPTFjGtO0XJ7Sdnmu+UAE8FgVuNxMu0HWdwbs73bFHK/FZJcidVvsj/M1TQYZVVkplk/SCSSSM8zfJuvLTLeryfFqShYIoztFoAABva2WbtBx1PBbHFsXGbIz2u+g5c00U0ekrZgxtwwWMj7ZNby947guWieis9dJ1RqxA9eQjIcm+07l4q7sGwqKlibDC2zR4uO9zjvJWmY2Kjj+1EPe/ae0/NFlpHTV8v3pzlu5dg9967MOoo4ImQxt1WMFgPqeJO0lZiIlU8BbREREIRRnSHQukq7uczUkP8AqR2BJ94bHfPmpMi9DiDcLlzQ4WcLqlMa6NayG7orTt93qv72H6EqHVVLJE7VkY5juDgWnwK9OLHq6OOVurJG144PaHDzTDakj8hdJvoWnNpt8715nZKQbg58VmQ4zM234hPxWd881c2IdHmHS5iIxnjG4j+U3Hko7W9Ejf8ARqyOUjL/AMzSPku3yQyi0gB5i/uo2RVMH8pxHIkd+ihMekrx6zGnyWTDpM0+tER2Ov8ARbKq6La5p6jo3jk8g+DgFB5oy1zmnaCQe0GyWOG0UmjB0uPIhNDFsRhI2nnqG+ynmFYoJtbV1ura+ta2fCxWxm1tht3LTaGQ/g39p/k2y39WMwFjq9kcVU6OMZA89w387rX0M0ksDHyfkRfS2py8Fiaqaq7dVHCwJOwZlLFycutXiGLRQu1XF17Xs0X28fBa+bSdg9WMu7XW+QUcxGqMsr5D+Y3HyA8LLZYTonW1LGyQ07nMdezrtaMjY5uI3hbGDBaVkbTKLutn+ogX6ELGVGO1T5HNgIAubWFzbrddk+ksp9VrW91/nf5LW1FdLJ673O5X+ymNF0V1j/8AySRxj4i8+DRbzUrwrotpI7GZ75jw9Rvg3PzT0UdLT5xtAPAZ9+vikZX1tTlK424mw7hl4KoqKilmeI4o3PcdgaCT5bArH0Y6MTcSVjrDb6FhzPxvGzsHirHoMOhgbqQxMjbwa0C/bxPasxD6lxyGS9iomtzdn5LopqdkbGxxtDWtFmtaLADkF3oiXTqIiIQiIiEIiIhCIiIQiIiELrmfqtc7gCfAXXl2R+s4k7z8yvTeJn8CX4H/ANJXl8HNM0+/okawXLevorJ0Nh/d4uxzv5iVtakdYrE0SH7vD8BWdMOse1YCsdtVch4u/wDRW0pRsxMA3Nb5BdOqtTpPU+jpnne6zB/Ft8rrc6iien89mwx/E49wAHzTGGR/dq42nS9+4X9FHiE326V7h2W78lE4Iy97WNFy4gAcybAL0vg9C2np4oG7I2BvaQMz3m5VDdHNH6bE6ZpFw1xef/m0uHmAvQ621Q69gshRssC5EREunVGa/TmggnfTyylr2EB3UcRcgHaAeKyqbS7D5DZtZF/E7V8nWVB6UVnpa2pk3OleR2axA8gFhR00hGsGPI4gEjxATP2W2zKR/iZC4gC69QQTMeLsc1w4tII8l2ry1T1T4zdj3NPFri0jw2KUYN0h18BGtL6Vm9svW8H+sPFeOpyNCumVjTqFfqLVaO4zHV07KiPIOyLTta4bWns8xYrapciybBuLhEREL1EREIRERCEREQhdFWzWje3i1w8QQvLJyPevVq8uaQU5iqqiIi2pK9vg42U8B1SlUPxKsjQmTWpYTxaW/peR9FtZW9Y9qjvR1Ua1Nq+xI4dzrO+qk87esVgcQGxWyji7xN/VaujftQsP/EeS6dVQPpDd+PEP/WfN/wDZWBqqC9JMBD4JLZFrm35ghw8rp3A3gVrb9jvIn0UGLAmldbh5hZPQ0L4ieULyPFg+qvReeui7E2wYlCXmzXh0RJ4vHV/mDR3r0KtfN+Sz1N+CKNad48KKikkv+I4FkQ367ht7Gi57ua2eOYzBSRGad4a0bPacfZaN5Xn3THSeSvqDK/qsblGy9w1v1cdpP2XkbNo56LqaXYFhqtLrK3dG8N9FTxRnIht3fE7rHzKgmhGCmeX0rh+HGQfieM2t7siVarG6rVm/qWtDi2nbuzPO2Q6Ak9R2KwwenMbTMd+Q5b+/LuWlxnAIZ2nXaL7ntsHN+/YVWGJ0L4JXQv2t37iDscOR+6uGygPSdEGmCTeQ5h7rOH1XGAV0jZhA43ab24EAnLoDlyOoUuL0rXxfdA/ULdQTbNSDoUxAiWopicnNErRzaQ13iHDwVuqhuhiS+JD/AIn3/l/sr5Wom/JVFNf7diiIiiTCIiIQiIiEIiIhCLz90t0HocTkdbKVrZB3jVd/M0+K9Aqs+m3BvSUsdU0Zwu1X/BJbPucB+pdxmzlDO27FB+jattPJCT67dYfEw5+Th4KyZhex4qi8LrjBNHM3axwdbiNjh3gkK8aSZskbXsN2uAc0jeCLrK/UVOWVDZho4eIy8rdAVbYTNtQ7G9p8D/m6aq02lOEftNM5jba7evHf2hu7xcd63dl9sqSKZ0UjZGag3Vm9oe0tdoVQ7wWkgggg2IORBG0HgQpZQdJOJRRiMThwAsC9jXOA+I5nvupjjuilPVddwLX+2zIn4gcnd6jMvRu+/Vqm296M38nLaQY9Ryt/cOyewgnxA9uSzcmGVEbv28xwNvC6imL4zUVUnpJ5XSO2C5yA4NaMmjkFmaN6Py1b8rtjB60m4cm+07yG/gphhXR7Cwh00jpT7IGozvAzPippTUjWNDWtDWgWDQLADkEnXfUUbG7FNme22Q5A5k8xYa56Kanws7W1Oem88yPQrHwvDmQxtjY3Va0ZD5kneTxXfM6+S5yP3BcLLIEuc4vccyr1oXXZVv0q1AMtPFf1Q55HxEAfIqynZC52b1SGk+J/tNVLMD1SdVnwNyb45n+JX/09C59SZNzQe85Dw2u5V+KSBsOz2nyz9lOugej1qqomtkyIMvzkcD8mFXeq+6FsLMOHelcLGd5ePgb1W/Jx71YK1jzdyqYm2aEREXKkRERCEREQhEREIRYmJULJ4ZIJBdj2lrhyItlzWWiELyppDhMlJUy00g6zHWv7Q2tcORFiph0baQgfucjrZkwk8dro/mR3jcp50q6GmthFRC29REMgNsjNpZ8QzI7xvVA5tO8EHsIINxbgQQvKqmZWQGJ/f2HcfmouLi6XikdTS7Q08wvQpCWUN0L01bMGwVLg2bY15ybJ/wBX8t+0cBNbLBVFHJTv+3IM/PiOHwrTRTNlYHNOS4DJdgk5L5qpZQ/auuzYrn6XkuDiSvtksuhEEZBcbJZc7KL6YaXR0bTGyz5yMm7mX/NJ9G7T4lTQ0r5nhjBcn53dpXEkrWNLnaBa3pI0gEURpI3fiSD8Qg5sjO74nbOy5UB0ZwZ9ZVRUzNr3WJ9lozc7uAKwJ53yPc97i57jdzjtJO8/5lkFfHRPocaOE1MzbTygZHbHHtDeTjkT3DctzR0rKOHYbrqT2n5kPe6zc0xqZdo6en+VO6SmZFGyJgs1jQ1o4BosF3oi7UyIiIQiIiEIiIhCIiIQiIiEIqx6R+jcVJdV0gAm2vjyAkPtNOxr/I8jts5F6CQbhcuaHCxXkWqpnxvdHIwtc02c1wsQeBBUlwDTmqpwGOPpox+V5OsB7sm3udftV8aR6K0dc21RCC4ZNkb1Xt7HjdyNwql0l6I6qEl9K4Ts9nJsg7jk7uPcvZGRTt2ZGgjj769yhaJYTtRn5yW5w7pAoZANdzoTwkbl+tt2+a3tNjVLILsqYnDlI37qiKujlheWSRvjcNrXtLT4FY7mg7QD2gH5qskwKE/g4jx9j4ptmKvGTmgr0M+thGZljHa9v3WortM6CK96lryPyxfiO8G7O9Uh6JvsN/SPsuWezy/suWYDED+p5PIAe69dirv6Wqb4/wBI00oLKZnoWn85sZD2flZ5nsUJAc529znHmSXHzJKlGjmgNfWEFsJjjP8AqS3a23uja7uCuTQ7o9pKG0lvSz/7rx6v/G3Y3tzPNWkMMNM3ZjFvXmfltyTe6Wc3efnJRfo06NzG5tZWs64s6KE/lO58g9rg3dtOey2URBJKma0NFgiIi8XSIiIQiIiEIiIhCIiIQiIiEIiIhCIiIQsWtoYpm6ssTJBwe0OHgQo7VdHWFSZmja34HPZ5NdZSxEAleEA6hQpnRdhQN/2Zx7ZZLf1LeYbotQ05vDSRNPtagLv1OuVuUXpJO9eBrRoEREXi6RERCEREQhf/2Q==' alt='vijay' />
                <ThreeBounce color='rgb(255, 234, 0)' size={20} />
            </div>
        </div>
    )
}

export default Loading
