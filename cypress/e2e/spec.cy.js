describe("Лекционные тесты", () => {
  // Первый лекционный тест
  it("Should successfully login", () => {
      cy.visit("/");
      cy.login("test@test.com", "test");
      cy.contains("Добро пожаловать test@test.com").should("be.visible");
  });
  // Второй лекционный тест
  it("Should not login with empty login", () => {
      cy.visit("/");
      cy.login("", "test");
      cy.get("#mail")
          .then(($el) => $el[0].checkValidity())
          .should("be.false");
  });
  // Третий лекционный тест
  it("Should not login with empty password", () => {
      cy.visit("/");
      cy.login("test@test.com", "");
      cy.get("#pass")
          .then(($el) => $el[0].checkValidity())
          .should("be.false");
  });

  const bookFirst = {
    title: "Ведьмак",
    description:
     "Одна из лучших фэнтези-саг за всю историю существования жанра. Оригинальное, масштабное эпическое произведение, одновременно и свободное от влияния извне, и связанное с классической мифологической, легендарной и сказовой традицией. Шедевр не только писательского мастерства Анджея Сапковского, но и переводческого искусства Евгения Павловича Вайсброта. «Сага о Геральте» — в одном томе.",
    author: "Сапковский, Анджей",
  };

  const bookSecond = {
    title: "Властелин колец: [трилогия]",
    description:
      "Перед вами трилогия «Властелин Колец». Своеобразная «Библия от фэнтези». Книга Книг XX века. Самое популярное, самое читаемое, самое культовое произведение ушедшего столетия. Не легенда литературы, но миф!",
    author: "Толкин, Джон Рональд Руэл",
  };

  const bookThird = {
    title: "Кровь, пот и пиксели. Обратная сторона индустрии видеоигр.",
    description:
      "Почему Diablo III чуть не стала крупнейшим провалом Blizzard? Как Halo превратилась в стратегию? Через что прошла студия, создавшая Uncharted? Всё, что вы хотели знать о разработке Witcher-3 и Destiny, а также многие другие эксклюзивные истории, рассказанные автору этой книги теми, кто создавал самые популярные игры последнего десятилетия. Узнайте, почему игровая индустрия — это не только престиж и огромные зарплаты, но и проверка на стрессоустойчивость и выносливость, которую проходят далеко не все.",
    author: "Джейсон Шрейер"
  }

  describe("Favorite book spec", () => {
    beforeEach(() => {
      cy.visit("/");
      cy.login("test@test.com", "test");
    });

    it("Should add new book", () => {
        cy.addBook(bookFirst);
        cy.get(".card-title").should("contain.text", bookFirst.title);
      });

      it("Should add favorite book", () => {
        cy.addFavoriteBook(bookSecond);
        cy.visit("/favorites");
        cy.get(".card-title").should("contain.text", bookSecond.title);
      });

    it("Should delete book from favorite", () => {
      cy.visit("/favorites");
      cy.contains(bookThird.title)
        .should("be.visible")
        .within(() => cy.get(".card-footer > .btn").click({ force: true }));
      cy.contains(bookSecond.title).should("not.exist");
    });
    })
})