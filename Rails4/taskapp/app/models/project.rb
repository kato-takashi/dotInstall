class Project < ActiveRecord::Base
    validates :title, presence: {message: "タイトルが空欄です。入力してください"},
length: { minimum: 3, message: "短すぎ!"}
end
