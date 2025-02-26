var builder = DistributedApplication.CreateBuilder(args);

builder.AddProject<Projects.Principal>("principal");

builder.AddProject<Projects.Secondary>("secondary");

builder.Build().Run();
