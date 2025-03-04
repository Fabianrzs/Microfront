using System.Text;

var builder = WebApplication.CreateBuilder(args);

builder.AddServiceDefaults();

// Add services to the container.
builder.Services.AddRazorPages();

var app = builder.Build();

app.MapDefaultEndpoints();

// Configure the HTTP request pipeline.
if (!app.Environment.IsDevelopment())
{
    app.UseExceptionHandler("/Error");
    // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
    app.UseHsts();
}

app.UseHttpsRedirection();
app.UseStaticFiles();

app.Use(async (context, next) =>
{
    if (context.Request.Path.StartsWithSegments("/angular"))
    {
        string frontAngular = builder.Configuration["Frontends:Angular"]!;
        var angularUrl = new StringBuilder().Append(frontAngular).Append(context.Request.Path.ToString())
        .Replace("/angular", "").ToString();
        context.Response.Redirect(angularUrl);
        return;
    }
    await next();
});

app.UseRouting();

app.UseAuthorization();

app.MapRazorPages();

app.UseStaticFiles();

await app.RunAsync();
