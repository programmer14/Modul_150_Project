﻿// <auto-generated />
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using loginAPI.Model;

namespace loginAPI.Migrations
{
    [DbContext(typeof(EFloginContext))]
    [Migration("20190121173845_CreateDatabase")]
    partial class CreateDatabase
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "2.1.4-rtm-31024")
                .HasAnnotation("Relational:MaxIdentifierLength", 128)
                .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

            modelBuilder.Entity("loginAPI.Model.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd()
                        .HasAnnotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn);

                    b.Property<string>("Anrede");

                    b.Property<string>("Email");

                    b.Property<string>("Name");

                    b.Property<string>("Ort");

                    b.Property<string>("Passwort");

                    b.Property<int>("Postleitzahl");

                    b.Property<string>("Strasse");

                    b.Property<string>("UserEmailToken");

                    b.Property<string>("UserSessionToken");

                    b.Property<string>("UserSessionTokenCreated");

                    b.Property<string>("Vorname");

                    b.HasKey("UserId");

                    b.ToTable("User");
                });
#pragma warning restore 612, 618
        }
    }
}
