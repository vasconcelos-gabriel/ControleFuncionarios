using ControleFuncionarios.Data.Configurations;
using ControleFuncionarios.Data.Entities;
using Dapper;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace ControleFuncionarios.Data.Repositories
{
    public class FuncionarioRepository
    {
        public void Inserir(Funcionario funcionario)
        {
            using (var connection = new SqlConnection(SqlServerConfiguration.GetConnectionString()))
            {
                connection.Execute("SP_INSERIR_FUNCIONARIO",
                    new
                    {
                        @NOME = funcionario.Nome,
                        @CPF = funcionario.Cpf,
                        @MATRICULA = funcionario.Matricula,
                        @DATAADMISSAO = funcionario.DataAdmissao
                    },
                    commandType: CommandType.StoredProcedure);
            }
        }
        public void Atualizar(Funcionario funcionario)
        {
            using (var connection = new SqlConnection(SqlServerConfiguration.GetConnectionString()))
            {
                connection.Execute("SP_ALTERAR_FUNCIONARIO",
                    new
                    {
                        @IDFUNCIONARIO = funcionario.IdFuncionario,
                        @NOME = funcionario.Nome,
                        @CPF = funcionario.Cpf,
                        @MATRICULA = funcionario.Matricula,
                        @DATAADMISSAO = funcionario.DataAdmissao
                    },
                    commandType: CommandType.StoredProcedure);
            }
        }
        public void Excluir(Guid idFuncionario)
        {
            using (var connection = new SqlConnection(SqlServerConfiguration.GetConnectionString()))
            {
                connection.Execute("SP_EXCLUIR_FUNCIONARIO",
                    new
                    {
                        @IDFUNCIONARIO =  idFuncionario
                
                    },
                    commandType: CommandType.StoredProcedure);
            }
        }
        public List<Funcionario> Consultar()
        {
            using (var connection = new SqlConnection(SqlServerConfiguration.GetConnectionString()))
            {
                return connection.Query<Funcionario>("SP_CONSULTAR_FUNCIONARIOS", commandType: CommandType.StoredProcedure).ToList();
            }
        }
        public Funcionario? ObterPorId(Guid idFuncionario)
        {
            using (var connection = new SqlConnection(SqlServerConfiguration.GetConnectionString()))
            {
                return connection.Query<Funcionario>("SP_OBTER_FUNCIONARIO", 
                    new {@IDFUNCIONARIO = idFuncionario},
                    commandType: CommandType.StoredProcedure).FirstOrDefault();
            }
        }
    }
}
