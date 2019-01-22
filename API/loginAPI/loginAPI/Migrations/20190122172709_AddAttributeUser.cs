using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace loginAPI.Migrations
{
    public partial class AddAttributeUser : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AlterColumn<DateTime>(
                name: "UserSessionTokenCreated",
                table: "User",
                nullable: false,
                oldClrType: typeof(string),
                oldNullable: true);

            migrationBuilder.AddColumn<bool>(
                name: "UserEmailVerified",
                table: "User",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "UserEmailVerified",
                table: "User");

            migrationBuilder.AlterColumn<string>(
                name: "UserSessionTokenCreated",
                table: "User",
                nullable: true,
                oldClrType: typeof(DateTime));
        }
    }
}
