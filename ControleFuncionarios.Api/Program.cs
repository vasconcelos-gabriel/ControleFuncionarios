 var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

#region Configuração do CORS
builder.Services.AddCors(
 s => s.AddPolicy("DefaultPolicy", builder =>
 {
     builder.AllowAnyOrigin()
     //qualquer servidor de origem pode acessar a API
     .AllowAnyMethod() //qualquer método (POST, PUT, DELETE, GET)
     .AllowAnyHeader(); //qualquer parâmetro de cabeçalho (HEADER)
 })
);
#endregion

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("DefaultPolicy");

app.UseAuthorization();

app.MapControllers();

app.Run();
