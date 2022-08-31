using System.ComponentModel.DataAnnotations;

namespace ControleFuncionarios.Api.Models
{
    public class FuncionariosPutModel
    {
        [Required(ErrorMessage = "Por favor, informe o id do Funcionário.")]
        public Guid IdFuncionario { get; set; } 

        [MinLength(6, ErrorMessage = "Por favor informe no mínimo {1} caracteres")]
        [MaxLength(150, ErrorMessage = "Por favor informe no máximo {1} caracteres")]
        [Required(ErrorMessage = "Por favor, informe o nome do funcionário.")]
        public string Nome { get; set; }

        [RegularExpression("^[0-9]{11}$", ErrorMessage = "Por favor, informe 11 dígitos numéricos")]
        [Required(ErrorMessage = "Por favor, informe o CPF do funcionário.")]
        public string Cpf { get; set; }

        [MinLength(4, ErrorMessage = "Por favor informe no mínimo {1} caracteres")]
        [MaxLength(10, ErrorMessage = "Por favor informe no máximo {1} caracteres")]
        [Required(ErrorMessage = "Por favor, informe a Matrícula do funcionário.")]
        public string Matricula { get; set; }
        [Required(ErrorMessage = "Por favor, informe a data de Admissão do funcionário.")]
        public DateTime DataAdmissao { get; set; }
    }
}
