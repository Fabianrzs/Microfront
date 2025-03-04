var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Principal>("principal");

builder.AddProject<Projects.Secondary>("secondary");

builder.AddProject<Projects.WebApplication1>("webapplication1");

builder.Build().Run();
