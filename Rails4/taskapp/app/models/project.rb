class Project < ActiveRecord::Base
    validates :title, presence: {message: "タイトルが空欄です。入力してください"}
end
