module NumericalIntegration

function normal(x::Float64)::Float64
	return (1 / sqrt(2 * pi)) * exp(-0.5 * x * x)
end

function integrate(f::Function, a::Float64, b::Float64, eps::Float64)::Float64
	total = 0.0
	x = a 
	while x <= b
		total += f(x) * eps
		x += eps
	end
	return total
end

Base.@ccallable function main()::Cint
	result = integrate(normal, -1.96, 1.96, 0.0001)
	println(Core.stdout, result)
	return 0
end 


end # End of module NumericalIntegration
