!#/bin/bash
rm -f juliac-buildscript.jl
rm -r juliac.jl
rm -r julia-config.jl

wget https://raw.githubusercontent.com/JuliaLang/julia/refs/heads/master/contrib/juliac-buildscript.jl
wget https://raw.githubusercontent.com/JuliaLang/julia/refs/heads/master/contrib/juliac.jl
wget https://raw.githubusercontent.com/JuliaLang/julia/refs/heads/master/contrib/julia-config.jl
