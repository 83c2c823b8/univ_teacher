using Plots, ImplicitPlots

f(x,y) = 6x + 4y - 2
g(x,y) = 7x - 3y + 13
a1(x,y) = x + 1
a2(x,y) = y - 2

anim = @animate for i=-200:250
	j = 0.01 * i
	h(x,y) = f(x,y) + j*g(x,y)
	plt = implicit_plot(f,label="f = 0",lc=:red, legend = :bottomright, xticks =-3:1:5, yticks =-3:1:5,  xlims=(-3.5,3.5), ylims=(-1.5,5.5))

	plt = implicit_plot!(g,label="g = 0",lc=:blue , xlims=(-3.5,3.5), ylims=(-1.5,5.5))
	plt = implicit_plot!(h,label="f + a*g = 0", lc = :green, xlims=(-3.5,3.5), ylims=(-1.5,5.5))
	if j > -0.88
		plt  = implicit_plot!(a2, label = "y=2", lc = :green, xlims=(-3.5,3.5), ylims=(-1.5,5.5))
	end
	if j > 1.33
		plt  = implicit_plot!(a1, label = "x=-1", lc = :green, xlims=(-3.5,3.5), ylims=(-1.5,5.5))
	end
end

gif(anim, "siml.gif"; fps=30)
