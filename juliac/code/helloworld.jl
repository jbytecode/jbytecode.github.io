module HelloWorld

Base.@ccallable function main()::Cint
    println(Core.stdout, "Hello, World!")
    return 0
end 

end # End of module HelloWorld 
